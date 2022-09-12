import React from "react"

import { PropGrabTask } from "./PropGrabTask"

export default class GrabTaskKeyword extends React.Component<PropGrabTask> {

    render(): JSX.Element {
        const { task, updateData } = this.props

        const checkboxProps: JSX.IntrinsicElements["input"] = {}
        checkboxProps.type = "checkbox"
        checkboxProps.defaultChecked = task.use_filter
        checkboxProps.onChange = () => {
            const use_filter = !this.props.task.use_filter
            updateData({ use_filter })
        }

        const inputProps: JSX.IntrinsicElements["input"] = {}
        inputProps.className = "form-control"
        inputProps.type = "text"
        inputProps.placeholder = "example : list_keyword.txt"
        inputProps.value = task.keyword
        inputProps.onChange = (event) => {
            const keyword = event.target.value
            updateData({ keyword })
        }

        if(task.marketplace === 'tokopedia'){
            return <div>
              <h3>not supported....</h3>
            </div>
        }

        return <div>
            <input {...checkboxProps} /> use filter
            <input {...inputProps} />
        </div>
    }
}
