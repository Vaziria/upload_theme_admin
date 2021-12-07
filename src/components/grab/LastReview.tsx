import React from "react"
import { getLastReview, LastReviewData, updateLastReview } from "../../api/legacy_setting"
import Checkbox from "../common/Checkbox"
import { InputNumber } from "../common/InputNumber"



export default class LastReview extends React.Component<unknown, LastReviewData> {

  state: LastReviewData = {
    active: false,
    days: 0
  }

  async componentDidMount(): Promise<void> {
      const data = await getLastReview()
      this.setState(data.data)
  }

  async save(data: Partial<LastReviewData>): Promise<void> {
      const payload = this.state

      this.setState({
          ...payload,
          ...data
      })
      
      await updateLastReview({
          ...payload,
          ...data
      })

  }

  render(): JSX.Element {
    return <div ng-controller="lastReview">
    <div className="form-check">
      <Checkbox
        checked={this.state.active}
        onChange={value => this.save({ active: value })}
        className="form-check-input"></Checkbox>

      <label className="form-check-label">
      Acivate Review Terakhir
      </label>
    </div>
    <div className="colss form-check" ng-if="data.active">
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Days : </span>
        </div>

        <InputNumber
            className="form-control"
            aria-describedby="inputGroup-sizing-sm"
            value={this.state.days}

            changeVal={value => this.save({ days: value })}
        ></InputNumber>
      </div>
    </div>
  </div>
  }

}