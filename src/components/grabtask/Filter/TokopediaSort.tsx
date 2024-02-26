import { Radio } from "antd";
import React from "react";

interface Props {
    value: string;
    onChange(value: string): void;
}

const options = [
    { value: "23", "label": "Paling Sesuai" },
    { value: "5", "label": "Ulasan" },
    { value: "8", "label": "Penjualan" },
    { value: "3", "label": "Termurah" },
    { value: "4", "label": "Termahal" },
    { value: "9", "label": "Terbaru" }
];

const TokopediaSort: React.FC<Props> = (props: Props) => {

    return <Radio.Group
        value={props.value}
        options={options}
        optionType="button"
        buttonStyle="solid"
        onChange={(val) => props.onChange(val.target.value)}
    />
}

export default TokopediaSort
