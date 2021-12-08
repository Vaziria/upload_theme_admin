import React from "react"
import { ShippingData } from "../../api/tokopedia/grab_api"
import Checkbox from "../common/Checkbox"

interface CheckItem {
    name: string
    value: number | number[]
}

interface IProp {
    value: ShippingData
    onChange: (value: ShippingData) => unknown
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
    setKurir(cek: boolean, index: number, val: number | number[]): void {
        const value = this.props.value
        if(!cek){
            value[index] = undefined
            delete value[index]
            
        } else {
            value[index] = val
        }
        this.props.onChange(value)

    }

    render(): JSX.Element {
        return <div className="col-lg-4">

        {
            listShipping.map((item, index) => {
                return <div key={index}>
                    <Checkbox
                        className="form-check-input"
                        
                        checked={this.props.value[index] !== undefined}
                        onChange={(e) => this.setKurir(e, index, item.value)}
                    >
                    </Checkbox>
                     {item.name}<br/>

                </div>
            })
        }
        
    </div>
    }
}