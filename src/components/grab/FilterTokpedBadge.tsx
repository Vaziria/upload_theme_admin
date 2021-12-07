import React from "react"
import { getGrabFilter, updateGrabFilter } from "../../api/legacy_setting"
import BadgeSelect from "../tokopedia/BadgeSelect"

interface IState {
    data: [number, number]
}

export default class FilterTokpedBadge extends React.Component <unknown, IState>{
    state: IState = {
        data: [0, 0]
    }

    async setData(index: number, value: number): Promise<void> {
        const { data } = this.state
        data[index] = value
        this.setState({ data })

        await updateGrabFilter({
            tokped_point: data
        })
    }

    async componentDidMount(): Promise<void> {
        const grabdata = await getGrabFilter()
        this.setState({ data: grabdata.data.tokped_point })
    }

    render(): JSX.Element {
        return <>
            <label className="mt-1"><strong>TOPED POINTS:</strong></label>
            <div className="row">
                <div className="col">
                    <BadgeSelect
                        value={this.state.data[0]}
                        change={(value) => this.setData(0, value)}
                    ></BadgeSelect>
                </div>
                <div className="col">
                    <BadgeSelect
                        value={this.state.data[1]}
                        change={(value) => this.setData(1, value)}
                    ></BadgeSelect>
                </div>
            </div>
        </>
    }
}