import React from "react"
import { generateCategoryCsv } from "../../api/task"
import { PropGrabTask } from "./PropGrabTask"

export default class GrabTaskDumpCategory extends React.Component<PropGrabTask> {
    async genCategory(): Promise<void> {
        await generateCategoryCsv(this.props.task.marketplace)
    }

    render(): JSX.Element {
        const { task } = this.props
        const filename = `${task.marketplace}_list_category.csv`

        const buttonGenerateProps: JSX.IntrinsicElements["button"] = {}
        buttonGenerateProps.className = "btn btn-sm btn-info mb-2"
        buttonGenerateProps.style = { width: "55%" }
        buttonGenerateProps.onClick = this.genCategory.bind(this)
        buttonGenerateProps.children = "GENERATE CATEGORY"

        return <div>
            <p>Silahkan edit di <strong>{filename}</strong> atau</p>
            <button {...buttonGenerateProps} />
        </div>
    }
}
