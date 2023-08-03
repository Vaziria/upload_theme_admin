import React from "react"

class PriceMax extends React.Component {
    // margin-top:25px;font-weight:bold;
    render (): JSX.Element {
        return <>
            <div style={{
                marginTop:25,
                fontWeight:'bold',
                color: 'white'
            }}>.</div>

            <div className="row">
				<div className="col">
					<div className="esti" style={{ marginTop: 25, fontWeight: 'bold' }}>
						<input
                            className="form-control bot"
                            type="text"
                            placeholder="Price Max"
                        />
					</div>
				</div>
			</div>
        </>
    }
}

export default PriceMax
