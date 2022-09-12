import React from "react"
import { generateCategoryFacetCsv } from "../../api/task"
import { PropGrabTask } from "./PropGrabTask"

export default class GrabTaskDumpCategoryFacet extends React.Component<PropGrabTask> {
    async genCategoryFacet(): Promise<void> {
        await generateCategoryFacetCsv()
    }

    render(): JSX.Element {
        const { task } = this.props
        const filename = `${task.marketplace}_list_category_facet.csv`

        const buttonGenerateProps: JSX.IntrinsicElements["button"] = {}
        buttonGenerateProps.className = "btn btn-sm btn-info mb-2"
        buttonGenerateProps.style = { width: "55%" }
        buttonGenerateProps.onClick = this.genCategoryFacet.bind(this)
        buttonGenerateProps.children = "GENERATE CATEGORY FACET"

        if(task.marketplace === 'tokopedia'){
            return <div>
              <h3>not supported....</h3>
            </div>
        }

        return <div>
            <p>Silahkan edit di <strong>{filename}</strong> atau</p>
            <button {...buttonGenerateProps} />
        </div>
    }
}
