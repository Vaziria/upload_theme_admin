import React from "react"

import { PropGrabTask } from "./PropGrabTask"

export default class GrabTaskProductUrl extends React.Component<PropGrabTask> {

    render(): JSX.Element {
        const { task, updateData } = this.props

        const inputProps: JSX.IntrinsicElements["input"] = {}
        inputProps.className = "form-control"
        inputProps.type = "text"
        inputProps.placeholder = "example : list_product.txt"
        inputProps.value = task.product_url
        inputProps.onChange = (event) => {
            const product_url = event.target.value
            updateData({ product_url })
        }

        return <div>
            <input {...inputProps} />
        </div>
    }
}
