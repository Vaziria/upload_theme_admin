import React from 'react'
import Checkbox from '../components/common/Checkbox'
import SelectedJamOperational from '../components/common/SelectedJamOperational'

const Test: React.FC = () => {

    const [check, setCheck] = React.useState(false)

    return (
        <div>
            <div
                className="custom-control custom-checkbox"
                style={{ marginTop: 20 }}
            >
                <Checkbox
                    id="selectAll"
                    className="custom-control-input"
                    checked={check}
                    onChange={setCheck}
                />
                <label className="custom-control-label" htmlFor="selectAll">Auto-Reply Offline</label>
            </div>

            {check && (<div>
                <h6>Pengaturan Jam Operasional Toko</h6>

                <SelectedJamOperational
                    value={{}}
                    onChange={(value) => console.log(value)}
                />

            </div>)}
        </div>
    )
}

export default Test