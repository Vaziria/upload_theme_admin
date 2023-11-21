/* eslint-disable @typescript-eslint/no-explicit-any */

import { Badge, Button, Card, Popconfirm, Space, Tooltip } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { ColDeletePayload, CollectionItem, SendOptions } from "../../model/newapisdk";
import { collectionListSelectedState } from "../../recoil/atoms/collection_list";
import { productManualCollectionIsSelectedIdState, productManualCollectionIsSelectedState } from "../../recoil/selectors/collection_list_page";

import TrashIconButton from "../button/TrashIconButton";
import AntdCheckbox from "../common/AntdCheckbox";
import AntdInput from "../common/AntdInput";

interface Props {
    collection: CollectionItem
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
        {/* <small className="c-tx-gray">
            <i className="far fa-clock" />&nbsp;
            {collection.created_at.slice(0, 10)}
        </small><br />
        <small className="c-tx-gray">
            <i className="fas fa-edit" />&nbsp;
            {collection.updated_at.slice(0, 10)}
        </small> */}
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
        <Tooltip title="belum support edit collection">
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
            <TrashIconButton danger disabled={isSelected} />
        </Popconfirm>
    </Space>
}

const CollectionCard: React.FC<Props> = (props: Props) => {

    const { collection } = props
    const [edit, setEdit] = React.useState(false)
    const history = useHistory()

    const [selectedIds, setSelectedIds] = useRecoilState(collectionListSelectedState)
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
                style={{ lineHeight: 1.2 }}
                onClick={() => history.push("/productmanual/" + collection.id, {
                    fromParent: true
                })}
            >

                <Badge count={collection.count} offset={[0, -2]}>
                    <i className='fas fa-folder' style={{ color: "#ffd666", fontSize: 24 }} />
                </Badge>

                <CollectionContent edit={edit} collection={collection} />
            </div>

            <CollectionAction {...props} edit={edit} onEdit={setEdit} />
        </div>
    </Card>
}

export default CollectionCard
