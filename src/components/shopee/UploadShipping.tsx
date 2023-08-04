import React, { useCallback, useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'
import client from '../../api/client'
import { getShippingConfig, IShipping, saveShippingConfig } from '../../api/shipping'
import Checkbox from '../common/Checkbox'

interface UploadProductShipping {
  channel_id: number
  name: string
  display_name: string
  name_key: string
  parent_channel_id: number
}

const productShippingState = atom<UploadProductShipping[]>({
  key: 'productShippingStateKey',
  default: []
})

const useCustomShippingState = atom<boolean>({
  key: 'useCustomShippingState',
  default: false
})

const activeShippings = atom<IShipping[]>({
  key: 'activeShippings',
  default: []
})


function ShippingList(){
  const [ shippings, setShippings ] = useRecoilState(productShippingState)
  const [ activeShip, setActiveShip ] = useRecoilState(activeShippings)

  const list_ids = activeShip.map(item => item.channelid)
  
  useEffect(() => {
    client.get('/legacy/v4/shopee/upload_config/product_shipping_list').then(res => {
      setShippings(() => {
        return res.data
      })
    })
  }, [setShippings])

  const checkItem = useCallback((checked: boolean, item: UploadProductShipping) => {
    
    if(checked){
      if(!list_ids.includes(item.channel_id)){
        setActiveShip( items => {
          return [...items, {
            channelid: item.channel_id,
            enabled: true
          }]
        })
      }

    } else {
      setActiveShip( items => {
        return items.filter(active => active.channelid !== item.channel_id)
      })
    }

  }, [setActiveShip])

  const checkAll = useCallback((checked: boolean) => {
    if(checked){
      setActiveShip(() => {
        return shippings.map(item => {
          return {
            channelid: item.channel_id,
            enabled: true
          }
        })
      })
    } else {
      setActiveShip([])
    }

  }, [shippings, setActiveShip])

  

  return (
    <>
      <Checkbox
            className="form-check-input"
            type="checkbox"
            checked={activeShip.length === shippings.length}
            onChange={checkAll}
          />  all

      { shippings.filter(shipping => shipping.parent_channel_id == 0).map(shipping => {
        return <div
          key={shipping.channel_id}
        >
          <Checkbox
            className="form-check-input"
            type="checkbox"
            checked={list_ids.includes(shipping.channel_id)}
            onChange={checked => checkItem(checked, shipping)}
          />  {shipping.display_name}
        </div>
      }) }
    </>
  )
}





export default function UploadShipping(): JSX.Element {
    
  const [ useCustom, setUseCustom ] = useRecoilState(useCustomShippingState)
  const [ activeShip, setActiveShip ] = useRecoilState(activeShippings)

  useEffect(() => {
    getShippingConfig().then(data => {
      setActiveShip(data.shipping)
      setUseCustom(data.use_custom_shipping)
    })
  }, [setActiveShip, setUseCustom])

  useEffect( () => {
    saveShippingConfig({
      shipping: activeShip,
      use_custom_shipping: useCustom
    })
  }, [useCustom, activeShip])

  return <div className="col-lg-4">
          
  <label>SETTING SHIPPING:</label>
  <div className="pl-4 mb-3 d-flex">
    <Checkbox
        className="form-check-input"
        type="checkbox"
        checked={useCustom}
        onChange={setUseCustom}
    />  Active Custom Shipping <br></br>
  </div>
  { useCustom && <ShippingList />}
  
  </div>
}