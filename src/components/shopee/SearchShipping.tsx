import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"
import { getSearchShopeeShipping } from "../../features/shopee/manifest"
import { SearchShopeeShipping } from "../../model/shopee/search_shipping"
import Checkbox from "../common/Checkbox"
import AddAccount from "../grab/AddAccount"

function mapState(state: RootState){
    return {
        search_shipping: state.ShopeeManifestReducer.search_shipping,
        is_error: state.ShopeeManifestReducer.shipping_error,
    }
  }
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProp extends PropsFromRedux {
    value: SearchShopeeShipping[]
    change: (value: SearchShopeeShipping[]) => unknown
}

class ShopeeSearchShipping extends React.Component<IProp> {
    getChecked(item: SearchShopeeShipping): boolean {
        return this.props.value.some(x => x.positionid === item.positionid)
    }
    
    setChecked(item: SearchShopeeShipping, checked: boolean): void {
        if(checked){
            this.props.change([...this.props.value, item])
        }else{
            this.props.change(this.props.value.filter(x => x.positionid !== item.positionid))
        }
    }

    render(): JSX.Element {
        if (this.props.is_error) {  
            return (
                <div>
                    <AddAccount onSubmit={getSearchShopeeShipping} />
                    <p className="red-text">Gagal mengambil data shipping.</p>
                </div>
            )
        }
        
        return <div>
            {
                this.props.search_shipping.map((item) => {
                    return <div key={item.positionid}>
                        <Checkbox
                            className="form-check-input"

                            
                            checked={this.getChecked(item)}
                            onChange={(val) => this.setChecked(item, val)}
                        />{ item.display_name }<br/>
                    </div>
                    
                })
            }
            
        </div>
    }
}


export default connector(ShopeeSearchShipping)