import { FileTextOutlined, UploadOutlined } from "@ant-design/icons"
import { Typography, Upload } from "antd"
import { RcFile, UploadFile } from "antd/es/upload"
import React from "react"

interface Props {
    csv?: RcFile
    onChange?(csv?: RcFile): void
}

const ImportCsvFile: React.FC<Props> = (props: Props) => {

    const { csv, onChange } = props
    const filelist: UploadFile<unknown>[] = []
    if (csv) {
        filelist.push({
            uid: csv.uid,
            name: csv.name,
        })
    }

    return <Upload.Dragger
        fileList={filelist}
        listType="picture"
        iconRender={() => <FileTextOutlined />}
        accept=".csv"
        beforeUpload={(info) => {
            onChange?.(info)
            return false
        }}
        onRemove={() => {
            onChange?.(undefined)
        }}
    >
        <p className="ant-upload-drag-icon">
            <UploadOutlined />
        </p>
        <p className="ant-upload-text">Klik atau seret file csv di area ini</p>
        <Typography.Paragraph type="secondary">
            import file dump csv dari&nbsp;
            <Typography.Text code>qlobot</Typography.Text>
            untuk dapat dijadikan&nbsp;
            <Typography.Text code>shopee collection</Typography.Text>
        </Typography.Paragraph>
    </Upload.Dragger>
}

export default ImportCsvFile
