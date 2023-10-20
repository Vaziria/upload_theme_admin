import { Divider, Select } from "antd"
import React from "react"

import { ShopeeAttributeChildren } from "../../../api/shopee/attribute"
import AddButton from "../../button/AddButton"
import InputFormat from "./InputFormat"
import { DefaultOptionType } from "antd/es/select"

interface Props {
    attrchilds: ShopeeAttributeChildren[]
    formatType: number
    value?: (string | number)[]
    onChange?(value?: string | number): void
}

const SelectMultiCustomFormat: React.FC<Props> = (props: Props) => {

    const { attrchilds, formatType } = props
    const childrenOptions = attrchilds.map((child) => ({
        label: child.displayName,
        value: child.valueId
    }))

    const [customInput, setCustomInput] = React.useState<string>()
    const [customOptions, setCustomOptions] = React.useState<DefaultOptionType[]>([])

    function addCustomOption() {
        if (!customOptions.some((v) => v.value == customInput)) {
            customOptions.push({
                label: customInput,
                value: customInput
            })
        }

        setCustomOptions([...customOptions])
        setCustomInput("")
    }

    return <Select
        mode="multiple"
        options={[
            {
                label: "Pilihan Utama",
                options: childrenOptions,
            },
            {
                label: "Pilihan Isi Sendiri",
                options: customOptions,
            },
        ]}
        filterOption={(input, option) =>
            (option?.label.toLocaleLowerCase() ?? '')
                .includes(input.toLocaleLowerCase())
        }
        dropdownRender={(menu) => (
            <>
                {menu}
                <Divider style={{ margin: "8px 0 4px" }} />
                <div className="c-flex c-gap-2" style={{ padding: 4 }}>
                    <InputFormat
                        value={customInput}
                        formatType={formatType}
                        onChange={setCustomInput}
                    />
                    <AddButton onClick={addCustomOption}>
                        Tambah
                    </AddButton>
                </div>
            </>
        )}
        onChange={(e, option) => console.log(e)}
    />
}

export default SelectMultiCustomFormat
