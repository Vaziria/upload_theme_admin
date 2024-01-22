import { SaveOutlined } from "@ant-design/icons"
import { Button, ButtonProps, message } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { MarketplaceColor, MarketplaceColorDisabled } from "../../const/mpcolor"
import { useMutation } from "../../hooks/mutation"
import { MarketList } from "../../model/Common"
import { mapperJakmallItemsState, mapperTokpedShopeeItemsState } from "../../recoil/atoms/mapper_items"

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

const MapperSave: React.FC<Props> = (props: Props) => {

    const { from, mode } = props
    switch (from) {

        case "tokopedia":
            switch (mode) {
                case "shopee":
                    return <TokopediaShopeeSave {...props} />
            }
            break
        
        case "jakmall":
            return <JakmallSave {...props} />

    }

    return <SaveButton from={from} disabled />
}

export default MapperSave