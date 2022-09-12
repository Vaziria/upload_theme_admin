import React from "react"
import { toPublicCategCsv } from "../../model/shopee/public_category"
import PublicCategSelect from "../shopee/PublicCategSelect"
import TokopediaCategorySelect from "../tokopedia/TokopediaCategorySelect"
import { PropGrabTask } from "./PropGrabTask";

type ShopeeSelect = React.ComponentProps<typeof PublicCategSelect>;
type TokpedSelect = React.ComponentProps<typeof TokopediaCategorySelect>;

export default class GrabTaskCategory extends React.Component<PropGrabTask> {
    renderSelect(): JSX.Element {
        const { task, updateData } = this.props
        const { marketplace, shopee_categ, tokped_categ } = task
        if(marketplace === 'shopee'){
            const props: ShopeeSelect = {}
            props.showLabel = true
            props.value = shopee_categ?.catid || 0
            props.onSelected = (categ) => {
                const shopee_categ = toPublicCategCsv(categ)
                updateData({ shopee_categ })
            }
      
            return <PublicCategSelect {...props} />
        }
        
        const props: TokpedSelect = {
            showLabel: true,
            value: tokped_categ || ["0", "0", "0"],
            selected: (tokped_categ) => updateData({ tokped_categ })
        }
        return <TokopediaCategorySelect {...props} />
    }

    render(): JSX.Element {      
        const props: JSX.IntrinsicElements["div"] = {}
        props.className = "mb-3"
        props.children = this.renderSelect()
        return <div {...props} />
    }
}
