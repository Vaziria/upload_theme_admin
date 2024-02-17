import { ClusterOutlined } from "@ant-design/icons"
import { Button, ButtonProps } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { useMutation } from "../../hooks/mutation"
import { MarketList } from "../../model/Common"
import { useQuery } from "../../model/newapisdk"
import { mapperJakmallItemsState, mapperShopeeTokpedItemsState, mapperTokpedShopeeItemsState } from "../../recoil/atoms/mapper_items"

interface Props {
    from: MarketList
    mode: MarketList
    namespace: string
    onSuccess(): void
    onError(): void
}

const AutoSuggestButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <Button icon={<ClusterOutlined />} {...props}>Auto Suggest</Button>
}

const TokopediaShopeeAutoSuggest: React.FC<Props> = (props: Props) => {
    const { onSuccess, onError } = props
    const { send } = useQuery("GetTokopediaMapperAutosuggest")
    const data = useRecoilValue(mapperTokpedShopeeItemsState)

    return <AutoSuggestButton
        disabled={!data.length}
        onClick={() => send({ onSuccess, onError })}
    />
}

const JakmallAutoSuggest: React.FC<Props> = (props: Props) => {
    const { mode: type, namespace, onSuccess, onError } = props
    const { mutate } = useMutation("PutJakmallCategoryMapperAutosuggest")
    const data = useRecoilValue(mapperJakmallItemsState)

    return <AutoSuggestButton
        disabled={!data.length}
        onClick={() => mutate({
            onSuccess,
            onError,
            query: { type, namespace },
        })}
    />
}

const ShopeeTokopediaAutoSuggest: React.FC<Props> = (props: Props) => {
    const { onSuccess, onError, namespace: collection } = props
    const { send } = useQuery("PutTokopediaMapperAutosuggest")
    const data = useRecoilValue(mapperShopeeTokpedItemsState)

    return <AutoSuggestButton
        disabled={!data.length}
        onClick={() => send({
            onSuccess,
            onError,
            query: { collection },
        })}
    />
}

const MapperAutoSuggest: React.FC<Props> = (props: Props) => {

    const { from, mode } = props
    const autosugBtn: {
        [key in MarketList]?: {
            [key in MarketList]?: JSX.Element
        }
    } = {
        shopee: {
            tokopedia: <ShopeeTokopediaAutoSuggest {...props} />
        },

        tokopedia: {
            shopee: <TokopediaShopeeAutoSuggest {...props} />
        },

        jakmall: {
            shopee: <JakmallAutoSuggest {...props} />,
            tokopedia: <JakmallAutoSuggest {...props} />,
        }
    }

    if (autosugBtn[from]?.[mode]) {
        return autosugBtn[from]?.[mode]
    }

    return <AutoSuggestButton disabled />
}

export default MapperAutoSuggest