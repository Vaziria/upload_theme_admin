import React from "react"

interface IProp {
    value: number
    change: (value: number) => unknown
}

export default class BadgeSelect extends React.Component<IProp> {
    
    badge(): number {
        const { value } = this.props

        if(value == 0){
            return 0
        }

        if(value <= 5){
            return 1
        }

        let bad = Math.floor(value / 5)

        if((value%5) > 0){
            bad = bad + 1
        }

        return bad

    }

    setBadge(badge: number): void {

        if(badge == 0){
            this.props.change(0)
            return
        }

        let data = ((badge * 5) - 5) + this.jum()

        if(data == 0){
            data = 1
        }

        this.props.change(data)
    }
    
    jum(): number {
        const { value } = this.props

        if(value == 0){
            return 0
        }

        if(value <= 5){
            return value
        }

        let j = value %5

        if(j == 0){
            j = 5;
        }

        return j
    }

    setJum(value: number): void{
        
        const badge = this.badge()
        value = value ? value: 0

        if(badge == 0){
            return
        }

        let data = ((badge * 5) - 5) + value

        if(data == 0){
            data = 1
        }
        this.props.change(data)
    }

    renderOption(value: number): JSX.Element {
        return <div className="form-check form-check-inline" key={value}>
            <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                value={value}
                checked={this.jum() == value}
                onChange={() => this.setJum(value)}
            />
            <label className="form-check-label">{value}</label>
        </div>
    }

    render(): JSX.Element {

        const badge = this.badge()

        return <form>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Level Badge :</label>
          </div>
          <select 
            className="custom-select"
            id="inputGroupSelect01"
                value={badge}
                onChange={(e) => this.setBadge(parseInt(e.target.value))}
            >
            <option value={0}>No Badge</option>
            <option value={1}>Bronze</option>
            <option value={2}>Silver</option>
            <option value={3}>Gold</option>
            <option value={4}>Diamond</option>
          </select>
        </div>
        <div className="form-check">
            {
                [1,2,3,4,5].map(value => this.renderOption(value))
            }
        </div>
    </form>
    }
}