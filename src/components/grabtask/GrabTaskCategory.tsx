import React from "react"

import { toPublicCategCsv } from "../../model/shopee/public_category"
import PublicCategSelect from "../shopee/PublicCategSelect"
import TokopediaCategorySelect from "../tokopedia/TokopediaCategorySelect"
import { PropGrabTask } from "./PropGrabTask";

type ShopeeSelect = React.ComponentProps<typeof PublicCategSelect>;
type TokpedSelect = React.ComponentProps<typeof TokopediaCategorySelect>;

export default class GrabTaskCategory extends React.Component<PropGrabTask> {
    marketplace = "shopee";

    renderSelect(): JSX.Element {
        const { task, updateData } = this.props
        const { shopee_categ, tokped_categ } = task
        if(this.marketplace === 'shopee'){
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
        
        const { task, updateData } = this.props
        const { shopee_categ } = task

        const shopee_props: ShopeeSelect = {}
        shopee_props.showLabel = true
        shopee_props.value = shopee_categ?.catid || 0
        shopee_props.onSelected = (categ) => {
            const shopee_categ = toPublicCategCsv(categ)
            updateData({ shopee_categ })
        }

        if (task.marketplace == "shopee") {
            return  <PublicCategSelect {...shopee_props} />
        }


        const { tokped_categ } = task
        const tokped_props: TokpedSelect = {
            showLabel: true,
            value: tokped_categ || ["0", "0", "0"],
            selected: (tokped_categ) => updateData({ tokped_categ })
        }

        return <TokopediaCategorySelect {...tokped_props} />
    }
}
