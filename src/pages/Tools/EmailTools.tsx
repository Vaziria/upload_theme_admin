import { InboxOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Card, Space } from "antd"
import { AxiosError } from "axios"
import React from "react"

import EmailTxt from "../../components/tool/EmailTxt"
import { useMutation } from "../../hooks/mutation"
import { BaseWebResponse, EmailData, useQuery } from "../../model/newapisdk"

interface Props {
    onSuccess(msg: string): void
    onError(msg: string): void
}

const EmailTools: React.FC<Props> = (props: Props) => {

    function errHandler(err: Error) {
        const rerr = err as AxiosError<BaseWebResponse>
        props.onError(rerr.response?.data.message || rerr.message)
    }

    const [emails, setEmails] = React.useState<Array<EmailData>>([])
    const { send: getTempEmail } = useQuery("GetInboxGetEmails")
    React.useEffect(() => {
        getTempEmail({
            onSuccess: (res) => setEmails(res as Array<EmailData>),
            onError: errHandler,
        })
    }, [])

    const { mutate: saveTempEmail } = useMutation("PutInboxSetEmails")
    function applySaveTempEmail(onSuccess?: (res: BaseWebResponse) => void) {
        saveTempEmail({
            onError: errHandler,
            onSuccess(res) {
                props.onSuccess("emailist saved...")
                onSuccess?.(res)
            }
        }, emails)
    }

    const { mutate: runDeleteInbox } = useMutation("PostInboxRunDeleteInbox")
    function applyRunDeleteInbox() {
        applySaveTempEmail(() => {
            runDeleteInbox({
                query: {
                    base: "./"
                },
                onError: errHandler,
                onSuccess: () => props.onSuccess("check bot running...")
            })
        })
    }


    return <Card title="Email Tools">
        <Space direction="vertical" className="d-flex" size="middle">
            <EmailTxt value={emails} onChange={setEmails} />

            <Space>
                <Button
                    className="c-tx-sm"
                    icon={<SaveOutlined style={{ fontSize: 16 }} />}
                    onClick={() => applySaveTempEmail()}
                >SAVE</Button>

                <Button
                    type="primary"
                    className="c-tx-sm"
                    style={{ background: "#fa8c16" }}
                    icon={<InboxOutlined style={{ fontSize: 16 }} />}
                    onClick={applyRunDeleteInbox}
                >DELETE INBOX</Button>
            </Space>
        </Space>
    </Card>
}

export default EmailTools
