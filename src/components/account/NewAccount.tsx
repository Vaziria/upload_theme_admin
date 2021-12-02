import React from 'react'
import { IAkun } from '../../model/shopee/TaskSetup'
import AkunTextarea from '../common/AkunTextarea'

interface IProps {
    addAccount (akuns: IAkun[]): void
}

interface IState {
    showBulk: boolean
    akuns: IAkun[]
}

class BulkAccount extends React.Component<IProps, IState> {
    state: IState = {
        showBulk: false,
        akuns: []
    }

    renderAddAccount (): JSX.Element {
        const { showBulk, akuns } = this.state

        if (!showBulk) {
            return <></>
        }

        return <div className="row bulk">
            <div className="col">
                <AkunTextarea
                    akuns={akuns}
                    update={akuns => this.setState({ akuns })}
                />
                <br/>
                <button
                    type="button"
                    className="btn btn-info btn-sm"
                    style={{
                        padding: 8,
                        width: 130,
                        marginTop: 10
                    }}
                    onClick={() => this.props.addAccount(akuns)}
                >ADD ACCOUNT</button>
            </div>
        </div>
    }

    render (): JSX.Element {
        return <div className="col-lg-8">
            <label>NEW ACCOUNT:</label>
            <div>
                {this.renderAddAccount()}
                <div className="row">
                    <div className="col">
                        <br/>
                        <button
                            className="btn btn-success showbut btn-sm btn-dark"
                            type="button"
                            style={{
                                padding: 10,
                                width: 172,
                                marginTop: 10
                            }}
                            onClick={() => this.setState({ showBulk: !this.state.showBulk })}
                        >BULK ADD ACCOUNT</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BulkAccount
