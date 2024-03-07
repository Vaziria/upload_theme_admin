import { PlusOutlined, TeamOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React from 'react'

import { useMutation } from '../../hooks/mutation'
import { Akun } from '../../model/newapisdk'
import AkunTextareaNew from '../common/AkunTextareaNew'

interface Props {
    onAddAccount(): void
}

const BulkAccount: React.FC<Props> = (props: Props) => {
    const [show, setShow] = React.useState(false)
    const [akuns, setAkuns] = React.useState<Akun[]>([])

    const { mutate: addAccount } = useMutation("PostLegacyApiUser")

    async function addAccounts() {
        await Promise.all(akuns.map((akun) => addAccount({}, {
            data: akun,
        })))
        setShow(false)
        setAkuns([])
        props.onAddAccount()
    }

    return <Space direction="vertical" className="d-flex">

        {show && <div className="w-100">
            <AkunTextareaNew akuns={akuns} onChange={setAkuns} />
        </div>}

        <Space>
            <Button
                className="c-tx-sm"
                icon={<TeamOutlined />}
                onClick={() => setShow(!show)}
            >{show ? "HIDE" : "SHOW"} ADD ACCOUNT</Button>

            <Button
                type="primary"
                className="c-tx-sm"
                icon={<PlusOutlined />}
                disabled={!show || !akuns.length}
                onClick={addAccounts}
            >ADD ACCOUNT</Button>
        </Space>
    </Space>
}

export default BulkAccount
