import { Button } from "antd"
import React from "react"

import { DivProps } from "../../types/props"

import { Mutate } from "../../hooks/mutation"
import AntdInput from "../common/AntdInput"

interface Props extends DivProps {
    loading?: boolean
    mutate?: Mutate<"PostPdcsourceCollectionCreate">
}

const CollectionAdd: React.FC<Props> = (props: Props) => {

    const { loading, mutate, className, ...divProps } = props
    const [name, setName] = React.useState("")

    function applyCreate() {
        mutate?.({
            onSuccess() {
                setName("")
            }
        }, { name })
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
            disabled={!name}
            loading={loading}
            onClick={applyCreate}
        >
            Tambah
        </Button>
    </div>
}

export default CollectionAdd