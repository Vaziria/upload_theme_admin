import { Button } from "antd"
import React from "react"

import { Collection, CollectionCreateRes, SendOptions } from "../../model/apisdk"
import { DivProps } from "../../types/props"
import AntdInput from "../common/AntdInput"

interface Props extends DivProps {
    loading?: boolean
    mutate?(a: SendOptions<CollectionCreateRes, undefined, Error>, b?: Partial<Collection>): void
}

const CollectionAdd: React.FC<Props> = (props: Props) => {

    const { loading, mutate, className, ...divProps } = props
    const [name, setName] = React.useState("")

    function applyCreate() {
        mutate?.({}, { name })
    }

    return <div className={`c-flex c-gap-2 ${className}`} { ...divProps }>
        <AntdInput
            value={name}
            placeholder="Nama Collection..."
            disabled={loading}
            style={{ maxWidth: 250 }}
            onChange={setName}
            onPressEnter={applyCreate}
        />
        <Button
            type="primary"
            icon={<i className='fas fa-plus' />}
            loading={loading}
            onClick={applyCreate}
        >
            Tambah
        </Button>
    </div>
}

export default CollectionAdd