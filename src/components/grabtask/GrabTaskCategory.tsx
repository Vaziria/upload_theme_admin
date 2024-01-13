import React from "react";

import { toPublicCategCsv } from "../../model/shopee/public_category";
import CategoryCascader from "../jakmall/input/CategoryCascader";
import PublicCategSelect from "../shopee/PublicCategSelect";
import TokopediaCategorySelect from "../tokopedia/TokopediaCategorySelect";
import { PropGrabTask } from "./PropGrabTask";

const GrabTaskCategory: React.FC<PropGrabTask> = (props: PropGrabTask): JSX.Element => {
    const { task, updateData } = props
    const { shopee_categ, tokped_categ, jakmall_categs, marketplace } = task

    switch (marketplace) {

        case "tokopedia":
            return <TokopediaCategorySelect
                showLabel={true}
                value={tokped_categ || ["0", "0", "0"]}
                selected={(tokped_categ) => updateData({ tokped_categ })}
            />

        case "jakmall":
            return <div className="form-group">
                <label>Jakmall :</label>
                <CategoryCascader
                    size="large"
                    className="w-100"
                    value={jakmall_categs}
                    onChange={(jakmall_categs) => updateData({ jakmall_categs })}
                />
            </div>

        default:
            return <PublicCategSelect
                showLabel={true}
                value={shopee_categ?.catid || 0}
                onSelected={(categ) => {
                    const shopee_categ = toPublicCategCsv(categ)
                    updateData({ shopee_categ })
                }}
            />
    }
}

export default GrabTaskCategory
