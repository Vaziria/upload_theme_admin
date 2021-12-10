import React from 'react'
import ContohKonten from '../components/spin/ContohKonten'
import SettingHastag from '../components/spin/SettingHastag'
import SettingStock from '../components/spin/SettingStock'
import SpinTitle from '../components/spin/SpinTitle'

class SpinPage extends React.Component {
    render (): JSX.Element {
        return <div className="margin-container">
            <ContohKonten />
            <div className="row">
                <div className="col-lg-8">
                    <SpinTitle />
                    <hr />
                    <SettingHastag />
                </div>
                <div className="col-lg-4">
                    <SettingStock />
                </div>
            </div>
        </div>
    }
}

export default SpinPage
