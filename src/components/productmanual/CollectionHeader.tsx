import { Button } from "antd"
import React from "react"
import { useHistory, useLocation } from "react-router-dom"

interface Props {
    title: string
    collection_name?: string
}

const CollectionHeader: React.FC<Props> = (props: Props): JSX.Element => {

    const history = useHistory()
    const location = useLocation<{ fromParent?: boolean }>()

    function goBack() {
        if (location.state?.fromParent) {
            history.goBack()
            return
        }

        if (props.collection_name) {
            history.replace("/productmanual/" + props.collection_name)
        } else {
            history.replace("/productmanual")
        }
    }

    return <div className="c-flex c-gap-2 c-item-center">
        <Button
            type="text"
            size="large"
            icon={<i className='fas fa-chevron-left' />}
            onClick={() => goBack()}
        />
        <h4 className="c-bold mb-0">{props.title}</h4>
    </div>
}

export default CollectionHeader
