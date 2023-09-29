/* eslint-disable @typescript-eslint/no-explicit-any */

import { Affix, Button, Card, Popconfirm } from "antd"
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { DeleteProductPayload, SendOptions } from "../../model/apisdk"
import { productManualSelectedState, productManualState } from "../../recoil/atoms/product_manual"
import { productManualIsSelectedAllState, productManualIsSelectedState } from "../../recoil/selectors/product_manual_page"

import AntdCheckbox from "../common/AntdCheckbox"

interface Props {
    deleteMutate(a: SendOptions<any, undefined, Error>, b?: Partial<DeleteProductPayload>): void
}

const ProductSelectAction: React.FC<Props> = (props: Props) => {

    const products = useRecoilValue(productManualState)
    const [selected, setSelected] = useRecoilState(productManualSelectedState)
    const isSelected = useRecoilValue(productManualIsSelectedState)
    const isSelectedAll = useRecoilValue(productManualIsSelectedAllState)

    function onSelectAll(selected: boolean) {
        const selectedIds: number[] = []
        
        if (selected) {
            products.forEach((item) => {
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
            ids: selected,
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
