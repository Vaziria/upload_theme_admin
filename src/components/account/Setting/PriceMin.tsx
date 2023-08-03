import React from "react"

class PriceMin extends React.Component {
    // margin-top:25px;font-weight:bold;
    render (): JSX.Element {
        return <>
            <div style={{ marginTop: 25, fontWeight: 'bold' }}>Setting Price :</div>
            <div className="row">
                <div className="col">
                    <div className="esti" style={{ marginTop: 25, fontWeight: 'bold' }}>
                        <input
                            className="form-control bot"
                            type="text"
                            placeholder="Price Min"
                        />
                    </div>
                </div>
            </div>
        </>
    }
}

export default PriceMin
