import React from "react"
import { Button } from 'antd';

import { generateShopeeCategoryCsv, generateTokopediaCategoryCsv } from "../../api/task"
import { PropGrabTask } from "./PropGrabTask"

interface IState {
    shopeeLoading: boolean
    tokopediaLoading: boolean
}

export default class GrabTaskDumpCategory extends React.Component<PropGrabTask, IState> {

    state: IState = {
        shopeeLoading: false,
        tokopediaLoading: false
    }

    async genShopeeCsv(): Promise<void> {
        this.setState({ shopeeLoading: true })
        await generateShopeeCategoryCsv()
        this.setState({ shopeeLoading: false })
    }

    async genTokopediaCsv(): Promise<void> {
        this.setState({ tokopediaLoading: true })
        await generateTokopediaCategoryCsv()
        this.setState({ tokopediaLoading: true })
    }

    renderDumpButton(): JSX.Element {

        const { task } = this.props

        if (task.marketplace === "shopee") {
            return <Button
                type="primary"
                style={{ backgroundColor: "#ff4d4f" }}
                loading={this.state.shopeeLoading}
                onClick={() => this.genShopeeCsv()}
            >
                <small>GENERATE SHOPEE CSV</small>
            </Button>
        }

        return <Button
            type="primary"
            style={{ backgroundColor: "#52c41a" }}
            loading={this.state.tokopediaLoading}
            onClick={() => this.genTokopediaCsv()}
        >
            <small>GENERATE TOKOPEDIA CSV</small>
        </Button>
    }

    render(): JSX.Element {

        const { task } = this.props

        const buttonGenerateProps: JSX.IntrinsicElements["button"] = {}
        buttonGenerateProps.className = "btn btn-sm btn-info mb-2"
        buttonGenerateProps.style = { width: "55%" }
        buttonGenerateProps.children = "GENERATE CATEGORY"

        return <div>
            <label>Keterangan :</label>
            <div className="mb-1">
                silahkan edit di <strong>{task.marketplace}_list_category.csv</strong> atau
            </div>
            <div>
                {this.renderDumpButton()}
            </div>
        </div>
    }
}
