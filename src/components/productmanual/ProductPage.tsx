import { Typography } from "antd"
import React from "react"
import BackButton from "../button/BackButton"

type TitleProps = React.PropsWithChildren<{
    onBack?(): void
}>

const Title: React.FC<TitleProps> = (props: TitleProps): JSX.Element => {

    const { children, onBack } = props

    return <div className="d-flex c-gap-4 c-item-center">
        {onBack && <div>
            <BackButton size="large" onClick={onBack} />
        </div>}
        <Typography.Title ellipsis level={4} className="mb-0">
            {children}
        </Typography.Title>
    </div>
}

export default {
    Title,
}
