import React from "react"

import { MapCateg } from "../../../model/newapisdk"
import { MapperJakmallTokpedItem } from "../../../recoil/atoms/mapper_items"

import TokopediaCategoryCascader from "../../tokopedia/TokopediaCategoryCascader"
import ItemCard from "./ItemCard"
import ItemTitle from "./ItemTitle"


interface Props {
    item: MapperJakmallTokpedItem
    onChange: (item: MapperJakmallTokpedItem) => void
}

const JakmallToTokopediaItem: React.FC<Props> = (props: Props) => {

    const { item, onChange } = props
    const { count, unmapped, mapper_id, categs } = item

    return <ItemCard title={
        <ItemTitle
            names={categs.map((categ) => categ?.name || "")}
            count={count}
            unmapped={unmapped}
        />
    }>
        <TokopediaCategoryCascader
            value={mapper_id}
            style={{ width: "100%" }}
            onOptionsChange={(options) => {
                if (options.length > 0) {
                    const categs = options.map<MapCateg>((opt) => ({
                        id: opt.value,
                        name: opt.label?.toString() || "",
                    }))
                    const categ = categs[categs.length - 1]

                    onChange({
                        ...item,
                        mapper_id: categ.id,
                        mapper_name: categ.name,
                        mapper_categs: categs
                    })

                } else {
                    onChange({
                        ...item,
                        mapper_id: 0,
                        mapper_name: "",
                        mapper_categs: []
                    })
                }
            }}
        />
    </ItemCard>
}

export default JakmallToTokopediaItem
