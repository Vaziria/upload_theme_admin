import React from "react"
import Checkbox from "../common/Checkbox"

interface CheckItem {
    name: string
    value: number | number[]
}

interface IProp {
    value: number[]
    onChange: (value: number[]) => unknown
}

const listShipping: CheckItem[] = [
    { name: "Instant Courier", value: [10,12,13]},
    { name: "JNE", value: 1},
    { name: "Pos Indonesia", value: 4},
    { name: "REX", value: 16},
    { name: "J&T", value: 14},
    { name: "Wahana", value: 6},
    { name: "SiCepat", value: 11},
    { name: "TIKI", value: 2},
    { name: "First", value: 9},
    { name: "Go-Send", value: 10},
    { name: "Ninja Express", value: 12},
    { name: "Grab", value: 13}
]

export default class TokpedShiping extends React.Component<IProp> {
    setKurir(cek: boolean, val: number[]): void {
        if(!cek) {
            const updateValue = this.props.value.filter((v) => !val.includes(Number(v)))
            this.props.onChange(updateValue)
            
        } else {
            const updateValue = this.props.value
            updateValue.push(...val)
            this.props.onChange(updateValue)
        }
    }

    render(): JSX.Element {
        return <div className="col-lg-4">

        {
            listShipping.map((item, index) => {
                const values = typeof item.value === 'number' ? [item.value] : item.value;
                const checked = values.every((v) => this.props.value.map(Number).includes(Number(v)));

                return <div key={index}>
                    <Checkbox
                        className="form-check-input"
                        checked={checked}
                        onChange={(e) => this.setKurir(e, values)}
                    >
                    </Checkbox>
                    {item.name}<br/>

                </div>
            })
        }
        
    </div>
    }
}