/* eslint-disable @typescript-eslint/no-explicit-any */

import { Badge, Button, Card, Popconfirm, Space, Tooltip } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { ColDeletePayload, Collection, SendOptions } from "../../model/apisdk";
import { productManualCollectionSelectedState } from "../../recoil/atoms/collection";
import { productManualCollectionIsSelectedIdState, productManualCollectionIsSelectedState } from "../../recoil/selectors/product_manual_collection_page";
import AntdCheckbox from "../common/AntdCheckbox";
import AntdInput from "../common/AntdInput";

interface Props {
    collection: Collection
    deleteLoading?: boolean
    deleteMutate?(a: SendOptions<any, undefined, Error>, b?: Partial<ColDeletePayload>): void
}

interface EditProps extends Props {
    edit: boolean
}

const CollectionContent: React.FC<EditProps> = (props: EditProps) => {
    
    const { collection, edit } = props
    const [editName, setEditName] = React.useState(collection.name)

    if (edit) {
        return <div className="c-flex-1">
            <AntdInput
                value={editName}
                placeholder="Masukkan nama..."
                onChange={setEditName}
            />
        </div>
    }

    return <div className="c-flex-1">
        <strong>{collection.name}</strong><br />
        <small className="c-tx-gray">
            <i className="far fa-clock" />&nbsp;
            {collection.created_at.slice(0, 10)}
        </small><br />
        <small className="c-tx-gray">
            <i className="fas fa-edit" />&nbsp;
            {collection.updated_at.slice(0, 10)}
        </small>
    </div>
}

interface EditActionProps extends EditProps {
    onEdit(bool): void
}

const CollectionAction: React.FC<EditActionProps> = (props: EditActionProps) => {

    const isSelected = useRecoilValue(productManualCollectionIsSelectedState)

    function applyDelete() {
        props.deleteMutate?.({}, {
            collection_ids: [props.collection.id]
        })
    }

    if (props.edit) {
        return <Space>
            <Button
                type="text"
                icon={<i className='fas fa-times' />}
                onClick={() => props.onEdit(false)}
            />

            <Button
                type="text"
                icon={<i className='far fa-edit' />}
                onClick={() => {
                    props.onEdit(false)
                }}
            />
        </Space>
    }

    return <Space>
        <Tooltip title="edit collection belum support">
            <Button
                type="text"
                icon={<i className='far fa-edit' />}
                disabled={true}
                onClick={() => props.onEdit(true)}
            />
        </Tooltip>

        <Popconfirm
            title="Hapus Collection"
            description={`Yakin ingin menghapus collection ${props.collection.name} ?`}
            onConfirm={applyDelete}
            okText="Hapus"
            cancelText="Batal"
        >
            <Button
                danger
                type="text"
                disabled={isSelected}
                icon={<i className='fas fa-trash' />}
            />
        </Popconfirm>
    </Space>
}

const CollectionCard: React.FC<Props> = (props: Props) => {

    const { collection } = props
    const [edit, setEdit] = React.useState(false)
    const history = useHistory()

    const selectedIds = useRecoilValue(productManualCollectionSelectedState)
    const setSelectedIds = useSetRecoilState(productManualCollectionSelectedState)
    const isSelected = useRecoilValue(productManualCollectionIsSelectedIdState(props.collection.id))
    function applySelect(selected: boolean) {
        if (selected) {
            setSelectedIds([...selectedIds, props.collection.id])
        } else {
            setSelectedIds(selectedIds.filter((id) => id !== props.collection.id))
        }
    }

    return <Card size="small" style={{ background: "#fafafa" }}>
        <div className="c-flex c-gap-4">
            <AntdCheckbox
                checked={isSelected}
                onChange={applySelect}
            />

            <div
                className="pointer c-flex c-flex-1 c-item-center c-gap-6"
                style={{ lineHeight: 1.2, height: "50px" }}
                onClick={() => history.push("/productmanual/" + collection.name, {
                    fromParent: true
                })}
            >

                <Badge count={0} offset={[0, -4]}>
                    <i className='fas fa-folder' style={{ color: "#ffd666", fontSize: 24 }} />
                </Badge>

                <CollectionContent edit={edit} collection={collection} />
            </div>

            <CollectionAction {...props} edit={edit} onEdit={setEdit} />
        </div>
    </Card>
}

export default CollectionCard
