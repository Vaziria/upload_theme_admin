import React from 'react'
import ContohKonten from '../components/spin/ContohKonten'
import SpinTitle from '../components/spin/SpinTitle'

class SpinPage extends React.Component {
    render (): JSX.Element {
        return <div className="margin-container">
            <ContohKonten />
            <SpinTitle />
        </div>
    }
}

export default SpinPage
