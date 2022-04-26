import React, { useEffect } from "react"
import { atom, useRecoilState, useRecoilValue } from "recoil"
import { shopeeShipping } from "../../api/shopee/preload"
import { IShopeeShipping } from "../../model/shopee/shipping"
import Checkbox from "../common/Checkbox"


interface PropChannel {
    channel: IShopeeShipping
    active_channels: number[]
    onChange: (channel: IShopeeShipping, checked: boolean) => unknown
}



const listShippingState = atom<IShopeeShipping[]>({
    key: "listShopeeShipping",
    default: []
})


function ChildChannel(props: PropChannel): JSX.Element {
    const { channel } = props
    const isCheck = props.active_channels.includes(channel.channel_id)
    
    return <div style={{
        marginLeft: "20px"
    }}>
        <Checkbox 
            onChange={value => props.onChange(channel, value)} checked={isCheck}></Checkbox>  {channel.display_name}
    </div>
}


function ParentChannel(props: PropChannel): JSX.Element {

    const { channel } = props
    const shippings = useRecoilValue(listShippingState)
    const childShippings = shippings.filter(shipping => shipping.parent_channel_id === channel.channel_id)

    if(childShippings.length === 0 && channel.is_mask_channel) {
        return <></>
    }

    return <div className="col-md-4"
        style={{
            marginLeft: "6px",
            marginRight: "6px"
        }}
    >
        <h4>{channel.display_name}</h4>
        {   channel.is_mask_channel ?
            childShippings.map(child => <ChildChannel
                key={child.channel_id}
                channel={child}
                active_channels={props.active_channels}
                onChange={props.onChange}
            />)
            :
            <ChildChannel
                channel={channel}
                active_channels={props.active_channels}
                onChange={props.onChange}
            />
        }
    </div>
}

interface Props {
    activeChannel: number[]
    onChange: (ids: number[]) => unknown
}

export default function ShippingSetting(props: Props): JSX.Element {
    const [shippings, setShippings] = useRecoilState(listShippingState)
    const { activeChannel, onChange: setActiveChannel } = props

    const toggleChannel = (channel: IShopeeShipping, checked: boolean): void => {
        if(checked) {
            setActiveChannel([...activeChannel, channel.channel_id])
        } else {
            setActiveChannel(activeChannel.filter(id => id !== channel.channel_id))
        }
    }

    useEffect(() => {
        if (shippings.length === 0) {
            shopeeShipping().then(res => {
                setShippings(res)
            })
        }
    }, [])

    const maskShipping = shippings.filter(shipping => shipping.parent_channel_id === 0)

    return <div className="row">
        {maskShipping.map(shipping => <ParentChannel
            key={shipping.channel_id}
            channel={shipping}
            active_channels={activeChannel}
            onChange={toggleChannel}
        ></ParentChannel>)}
    </div>
}
