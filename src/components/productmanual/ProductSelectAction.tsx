/* eslint-disable @typescript-eslint/no-explicit-any */

import { Affix, Button, Card, Popconfirm } from "antd"
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { productManualListState, productManualSelectedState } from "../../recoil/atoms/product_manual"
import { productManualIsSelectedAllState, productManualIsSelectedState } from "../../recoil/selectors/product_manual_page"

import AntdCheckbox from "../common/AntdCheckbox"

interface Props {
    onDelete(ids: number[]): void
}

const ProductSelectAction: React.FC<Props> = (props: Props) => {

    const products = useRecoilValue(productManualListState)
    const [selected, setSelected] = useRecoilState(productManualSelectedState)
    const isSelected = useRecoilValue(productManualIsSelectedState)
    const isSelectedAll = useRecoilValue(productManualIsSelectedAllState)

    function onSelectAll(selected: boolean) {
        const selectedIds: number[] = []
        
        if (selected) {
            products.data.forEach((item) => {
                item && selectedIds.push(item.id)
            })
        }

        setSelected(selectedIds)
    }

    function applyDeleteSelected() {
        setSelected([])
        props.onDelete(selected)
    }

    return  <Affix offsetTop={8} className="mb-3">
        <Card size="small">
            <div className="c-flex c-item-center c-gap-4">
                <AntdCheckbox
                    className="c-flex-1"
                    indeterminate={isSelected && !isSelectedAll}
                    checked={isSelectedAll}
                    onChange={onSelectAll}
                >Pilih Semua</AntdCheckbox>

                <span>{isSelected && `${selected.length} produk dipilih`}</span>

                <Popconfirm
                    title="Hapus Produk Dipilih"
                    description={`Yakin ingin menghapus ${selected.length} produk ?`}
                    onConfirm={applyDeleteSelected}
                    okText="Hapus Semua"
                    cancelText="Batal"
                >
                    <Button
                        danger
                        disabled={!isSelected}
                        icon={<i className='fas fa-trash' />}
                    >Hapus Semua</Button>
                </Popconfirm>
            </div>
        </Card>
    </Affix>
}

export default ProductSelectAction
