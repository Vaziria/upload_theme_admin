import { Button, Space } from "antd";
import React from "react";

import { UseOnceText } from "../../../../model/apisdk";

interface Props {
    value?: Partial<UseOnceText>[]
    onChange?(v: Partial<UseOnceText>[]): void
}

const FieldConfigOnceTextUploadForm: React.FC<Props> = (props: Props) => {

    const inputRef = React.useRef<HTMLInputElement>(null)
    const reader = new FileReader()

    reader.onload = function (ev: ProgressEvent<FileReader>) {
        const texts = ev.target?.result?.toString().split("\n")
        
        if (texts) {
            const onceTexts = texts.map<Partial<UseOnceText>>((text) => ({ text }))
            props.onChange?.([...onceTexts, ...(props.value || [])])
        }
    }

    function onInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const file = ev.target.files?.[0]

        if (file) {
            reader.readAsText(file)
        }
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }

    return <div>
        <input
            ref={inputRef}
            type="file" 
            accept=".txt"
            className="d-none"
            onChange={onInputChange}
        />
        <Space>

            <Button
                icon={<i className="fa fa-upload" />}
                onClick={() => inputRef.current?.click()}
            >Upload Txt</Button>

        </Space>
    </div>
}

export default FieldConfigOnceTextUploadForm
