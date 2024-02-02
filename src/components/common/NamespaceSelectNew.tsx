import React from "react"
import { Select } from "antd"
import { useRecoilValue } from "recoil"
import type { SelectProps } from "antd"

import { namespaceSelectState } from "../../recoil/selectors/namespace_select"
import type { NamespaceSelectKey } from "../../recoil/selectors/namespace_select"

type SelProps = SelectProps<string | undefined>

interface Props extends Omit<SelProps, "options" | "onChange"> {
    marketplace?: NamespaceSelectKey
    onChange?: (namespace?: string) => void
    showCount?: boolean
}

const NamespaceSelect: React.FC<Props> = (props: Props) => {

    const mode = props.marketplace || "all"
    const namespaces = useRecoilValue(namespaceSelectState(mode))
    const options: SelProps["options"] = namespaces.map((namespace) => ({
        value: namespace.name,
        label: namespace.name + (props.showCount ? ` ( ${ namespace.count } )` : ""),
    }))

    const onChange: Props["onChange"] = (value) => {
        props.onChange?.(value || undefined)
    }

    return <Select
        allowClear
        showSearch
        placeholder="pilih namespace"
        {...props}
        options={options}
        onChange={onChange}
        // onFocus={}
    />
}

export default NamespaceSelect