import { ClusterOutlined } from "@ant-design/icons"
import { Button, ButtonProps } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { useMutation } from "../../hooks/mutation"
import { MarketList } from "../../model/Common"
import { useQuery } from "../../model/newapisdk"
import { mapperJakmallItemsState, mapperTokpedShopeeItemsState } from "../../recoil/atoms/mapper_items"

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
    const { send } = useQuery("GetV1CategoryMapperTokopediaToShopeeAutosuggest")
    const data = useRecoilValue(mapperTokpedShopeeItemsState)

    return <AutoSuggestButton
        disabled={!data.length}
        onClick={() => send({
            onSuccess,
            onError,
            query: {
                namespace: props.namespace,
            },
        })}
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

const ShopeeTokopediaAutoSuggest: React.FC<Props & { qlobot: boolean }> = (props: Props & { qlobot: boolean }) => {
    const { onSuccess, onError, namespace: collection, qlobot } = props
    const { send } = useQuery("PutTokopediaMapperAutosuggest")

    return <AutoSuggestButton
        disabled={!collection}
        onClick={() => send({
            onSuccess,
            onError,
            query: {
                qlobot,
                collection
            },
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
            tokopedia: <ShopeeTokopediaAutoSuggest qlobot={false} {...props} />
        },
        qlobot_shopee: {
            tokopedia: <ShopeeTokopediaAutoSuggest qlobot={true} {...props} />
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