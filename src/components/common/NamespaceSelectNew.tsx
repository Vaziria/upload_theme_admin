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
    showAll?: boolean
}

const NamespaceSelect: React.FC<Props> = (props: Props) => {

    const { marketplace, onChange, showCount, showAll, ...reprops } = props
    const mode = marketplace || "all"
    const namespaces = useRecoilValue(namespaceSelectState(mode))
    const options: SelProps["options"] = namespaces.map((namespace) => ({
        value: namespace.name,
        label: namespace.name + (showCount ? ` ( ${ namespace.count } )` : ""),
    }))

    if (showAll) {
        const count = namespaces.reduce((res, v) => res + v.count, 0)
        options.unshift({
            value: "",
            label: `All ( ${count} )`,
        })
    }

    const onChangeNamespaces: Props["onChange"] = (value) => {
        onChange?.(value || undefined)
    }

    return <Select
        allowClear
        showSearch
        placeholder="pilih namespace"
        {...reprops}
        options={options}
        onChange={onChangeNamespaces}
    />
}

export default NamespaceSelect