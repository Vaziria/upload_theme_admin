import { Radio } from "antd";
import React from "react";

interface Props {
    value: string;
    onChange(value: string): void;
}

const options = [
    { label: "Terkait", value: "relevancy" },
    { label: "Terbaru", value: "ctime" },
    { label: "Terlaris", value: "sales" },
    { label: "Harga", value: "price" },
];

const ShopeeSort: React.FC<Props> = (props: Props) => {

    return <Radio.Group
        value={props.value}
        options={options}
        optionType="button"
        buttonStyle="solid"
        onChange={(val) => props.onChange(val.target.value)}
    />
}

export default ShopeeSort
