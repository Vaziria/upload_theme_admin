/* eslint-disable @typescript-eslint/no-explicit-any */

import { Affix, Card, Popconfirm } from "antd"
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { ColDeletePayload, SendOptions } from "../../model/apisdk"
import { collectionListSelectedState, collectionListState } from "../../recoil/atoms/collection_list"
import { productManualCollectionIsSelectedAllState, productManualCollectionIsSelectedState } from "../../recoil/selectors/collection_list_page"

import DeleteButton from "../button/DeleteButton"
import AntdCheckbox from "../common/AntdCheckbox"

interface Props {
    deleteMutate?(a: SendOptions<any, undefined, Error>, b?: Partial<ColDeletePayload>): void
}

const CollectionSelectAction: React.FC<Props> = (props: Props) => {

    const collection = useRecoilValue(collectionListState)
    const [selected, setSelected] = useRecoilState(collectionListSelectedState)
    const isSelected = useRecoilValue(productManualCollectionIsSelectedState)
    const isSelectedAll = useRecoilValue(productManualCollectionIsSelectedAllState)

    function onSelectAll(selected: boolean) {
        const selectedIds: number[] = []
        
        if (selected) {
            collection.data.forEach((item) => {
                item && selectedIds.push(item.id)
            })
        }

        setSelected(selectedIds)
    }

    function applyDeleteSelected() {
        props.deleteMutate?.({
            onSuccess() {
                setSelected([])
            },
        }, {
            collection_ids: selected,
        })
    }

    return  <Affix offsetTop={0} className="mb-3">
        <Card size="small">
            <div className="c-flex c-item-center c-gap-4">
                <AntdCheckbox
                    className="c-flex-1"
                    indeterminate={isSelected && !isSelectedAll}
                    checked={isSelectedAll}
                    onChange={onSelectAll}
                >Pilih Semua</AntdCheckbox>

                <span>{isSelected && `${selected.length} collection dipilih`}</span>

                <Popconfirm
                    title="Hapus Collection Dipilih"
                    description={`Yakin ingin menghapus ${selected.length} collection ?`}
                    onConfirm={applyDeleteSelected}
                    okText="Hapus Semua"
                    cancelText="Batal"
                >
                    <DeleteButton disabled={!isSelected}>
                        Hapus Semua
                    </DeleteButton>
                </Popconfirm>
            </div>
        </Card>
    </Affix>
}

export default CollectionSelectAction
