import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../features'
import { getExample } from '../../../features/spin'

function mapState(state: RootState){
    return {
        config: state.SpinReducer.config,
        exampleTitle: state.SpinReducer.exampleTitle
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

class ExampleTitle extends React.Component<PropsFromRedux> {

    render (): JSX.Element {
        const { config , exampleTitle} = this.props

        return <>
            <p><strong>{exampleTitle}</strong></p>
            <button
                className="btn btn-primary btn-sm"
                type="button"
                onClick={() => getExample(config.title)}
            >Contoh Judul</button>

            <p className="warn"><i>
                {'** Contoh Pola Spin Title : {sepatuku|sepatumurah|sepatusneakers} [title] {[belakang]|[akhir]}'}
            </i></p>
        </>
    }
}

export default connector(ExampleTitle)
