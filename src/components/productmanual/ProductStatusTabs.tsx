import { Button, Tabs } from "antd";
import React from "react";

interface Props {
    onCreate(): void
}

const tabItems = [
    {
        label: 'Semua',
        key: '1',
    },
    {
        label: 'Aktif',
        key: '2',
    },
    {
        label: 'Draft',
        key: '3',
    }   
]

const ProductManualItems: React.FC<Props> = (props: Props) => {

    return <Tabs defaultActiveKey="1" items={tabItems} tabBarExtraContent={{
        right: <Button
            type="primary"
            icon={<i className='fas fa-plus' />}
            onClick={() => props.onCreate()}
        >
            Tambah
        </Button>
    }}/>
}

export default ProductManualItems
