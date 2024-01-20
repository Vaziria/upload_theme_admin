import { ClusterOutlined } from "@ant-design/icons"
import { Button, ButtonProps } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { useMutation } from "../../hooks/mutation"
import { MarketList } from "../../model/Common"
import { useQuery } from "../../model/newapisdk"
import { mapperJakmallShopeeItemsState, mapperTokpedShopeeItemsState } from "../../recoil/atoms/mapper_items"

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

const JakmallShopeeAutoSuggest: React.FC<Props> = (props: Props) => {
    const { mode: type, namespace, onSuccess, onError } = props
    const { mutate } = useMutation("PutJakmallCategoryMapperAutosuggest")
    const data = useRecoilValue(mapperJakmallShopeeItemsState)

    return <AutoSuggestButton
        disabled={!data.length}
        onClick={() => mutate({
            onSuccess,
            onError,
            query: { type, namespace },
        })}
    />
}

const MapperAutoSuggest: React.FC<Props> = (props: Props) => {

    const { from, mode } = props
    switch (from) {

        case "tokopedia":
            switch (mode) {
                case "shopee":
                    return <TokopediaShopeeAutoSuggest {...props} />
            }
            break

        case "jakmall":
            switch (mode) {
                case "shopee":
                    return <JakmallShopeeAutoSuggest {...props} />
            }
    }

    return <AutoSuggestButton disabled />
}

export default MapperAutoSuggest