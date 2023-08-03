import React from "react"
import { Button, Space } from "antd"
import { ExportOutlined, SyncOutlined } from "@ant-design/icons"




export default function ProductTool({namespace}: {namespace:string}){
    // return <>asdasd</>
    
    return <Space>
        <Button type="primary" icon={<ExportOutlined rev={undefined} />} loading>
            Export Suplier
        </Button>
        {/* <Button type="primary" icon={<SyncOutlined rev={undefined} />}>
            Export Category
        </Button>
        <Button type="primary" icon={<SyncOutlined rev={undefined} />}>
            Rescync Category
        </Button> */}
       
    </Space> 
    
}


