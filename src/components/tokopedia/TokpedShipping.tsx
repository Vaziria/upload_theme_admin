import { Checkbox, Space } from "antd"
import React, { useEffect, useState } from "react"
import client from "../../api/client"


// http://localhost:5000/tokopedia/filter/shipping

export interface ShippingItem {
    name: string
    Description: string
    key: string
    icon: string
    value: string
    inputType: string
    totalData: string
    valMax: string
    valMin: string
    hexColor: string
    child: any[]
    isPopular: boolean
    isNew: boolean
}
  


export default function TokpedShiping({value, setShippingVal}: {value: string[], setShippingVal: (ships: string[])=>void}) {
    const [shippings, setShippings] = useState<ShippingItem[]>([])

    useEffect(() => {
        client.get("/tokopedia/filter/shipping").then(res => {
            const sortedData = res.data.sort((a, b) => (a.name < b.name ? -1 : 1))
            setShippings(sortedData)
        })
    },[])

    const checkShipping = (key: string) => {
        if (value.includes(key)){
            const newShips = value.filter(dat => { return dat != key})
            setShippingVal(newShips) 
        } else {
            const newShips = [...value, key]
            setShippingVal(newShips) 
        }
        
    }

    return (
    <div>
        <Space direction="vertical">
        {
            shippings.map(data => {
                const isChecked = value.includes(data.value)
                return <Checkbox key={data.name} onChange={e => checkShipping(data.value)} checked={isChecked}>{data.name}</Checkbox>
            })
        }
        </Space>
        
        
    </div>
    )
}


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


// class TokpedShipingB extends React.Component<IProp> {
//     setKurir(cek: boolean, val: number[]): void {
//         if(!cek) {
//             const updateValue = this.props.value.filter((v) => !val.includes(Number(v)))
//             this.props.onChange(updateValue)
            
//         } else {
//             const updateValue = this.props.value
//             updateValue.push(...val)
//             this.props.onChange(updateValue)
//         }
//     }

//     render(): JSX.Element {
//         return <div className="col-lg-4">

//         {
//             listShipping.map((item, index) => {
//                 const values = typeof item.value === 'number' ? [item.value] : item.value;
//                 const checked = values.every((v) => this.props.value.map(Number).includes(Number(v)));

//                 return <div key={index}>
//                     <Checkbox
//                         className="form-check-input"
//                         checked={checked}
//                         onChange={(e) => this.setKurir(e, values)}
//                     >
//                     </Checkbox>
//                     {item.name}<br/>

//                 </div>
//             })
//         }
        
//     </div>
//     }
// }