import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../../features"
import { UploadMode } from "../../../api/bot_configuration"
import { Space } from "antd"
import ProductManualCollectionSelect from "../../common/ProductManualCollectionSelect"
import NamespaceSelect from "../../common/NamespaceSelectNew"

function mapState(state: RootState) {
    return {
        namespaces: state.CollectionReducer.namespaces
    }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>
interface IProps extends PropsFromRedux {
    mode: UploadMode
    value?: string
    update(collection: string): void
}

class Collection extends React.Component<IProps> {
    render(): JSX.Element {

        const { mode, value, update } = this.props

        if (mode === "shopee_manual") {
            return <Space.Compact className="input-group mb-3 input-group-sm">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Collection</span>
                </div>
                <ProductManualCollectionSelect
                    value={value}
                    placeholder="Pilih Collection"
                    className="flex-1"
                    onChange={update}
                />
            </Space.Compact>
        }

        return <Space.Compact className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Collection</span>
            </div>
            <NamespaceSelect
                showCount
                marketplace={mode}
                value={value}
                placeholder="Pilih Collection"
                className="flex-1"
                onChange={(namspace) => update(namspace || "")}
            />
        </Space.Compact>
    }
}

export default connector(Collection)
