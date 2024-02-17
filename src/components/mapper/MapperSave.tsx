import { SaveOutlined } from "@ant-design/icons"
import { Button, ButtonProps, message } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { MarketplaceColor, MarketplaceColorDisabled } from "../../const/mpcolor"
import { useMutation } from "../../hooks/mutation"
import { MarketList } from "../../model/Common"
import { mapperJakmallItemsState, mapperShopeeTokpedItemsState, mapperTokpedShopeeItemsState } from "../../recoil/atoms/mapper_items"

interface Props {
    from: MarketList
    mode: MarketList
    onSuccess(): void
}

const SaveButton: React.FC<ButtonProps & Pick<Props, "from">> = (props: ButtonProps & Pick<Props, "from">) => {

    const { from, ...reprops } = props
    const background = props.disabled ? MarketplaceColorDisabled[from] : MarketplaceColor[from]

    return <Button
        type="primary"
        style={{ background }}
        icon={<SaveOutlined />}
        {...reprops}
    >Save Mapper</Button>
}

const TokopediaShopeeSave: React.FC<Props> = (props: Props) => {

    const { mutate } = useMutation("PutTokopediaMapperMap")
    const data = useRecoilValue(mapperTokpedShopeeItemsState)

    const onSuccess = () => {
        props.onSuccess()
        message.info("mapper saved")
    }
    const onError = () => message.error("failed to save mapper")

    return <SaveButton
        from={props.from}
        disabled={!data.length}
        onClick={() => mutate({ onSuccess, onError }, data.filter((item) => !!item.shopee_id))}
    />
}

const JakmallSave: React.FC<Props> = (props: Props) => {

    const { mutate } = useMutation("PostJakmallCategoryMapperSave")
    const data = useRecoilValue(mapperJakmallItemsState)

    const onSuccess = () => {
        props.onSuccess()
        message.info("mapper saved")
    }
    const onError = () => message.error("failed to save mapper")

    return <SaveButton
        from={props.from}
        disabled={!data.length}
        onClick={() => mutate({ onSuccess, onError }, data.filter((item) => !!item.mapper_id))}
    />
}

const ShopeeTokopediaSave: React.FC<Props> = (props: Props) => {

    const { mutate } = useMutation("PutTokopediaMapperMap")
    const data = useRecoilValue(mapperShopeeTokpedItemsState)

    const onSuccess = () => {
        props.onSuccess()
        message.info("mapper saved")
    }
    const onError = () => message.error("failed to save mapper")

    return <SaveButton
        from={props.from}
        disabled={!data.length}
        onClick={() => mutate({ onSuccess, onError }, data.filter((item) => !!item.tokopedia_id))}
    />
}

const MapperSave: React.FC<Props> = (props: Props) => {

    const { from, mode } = props
    const saveBtn: {
        [key in MarketList]?: {
            [key in MarketList]?: JSX.Element
        }
    } = {
        shopee: {
            tokopedia: <ShopeeTokopediaSave {...props} />
        },

        tokopedia: {
            shopee: <TokopediaShopeeSave {...props} />
        },

        jakmall: {
            shopee: <JakmallSave {...props} />,
            tokopedia: <JakmallSave {...props} />
        }
    }

    if (saveBtn[from]?.[mode]) {
        return saveBtn[from]?.[mode]
    }

    return <SaveButton from={from} disabled />
}

export default MapperSave