import type { SelectProps } from "antd";
import { Button, Divider, Select } from "antd";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { imageCollectionPathState } from "../../recoil/atoms/image_collection_path";
import AntdInput from "./AntdInput";

export type ImageCollectionSelectProps = Omit<SelectProps<string>, "options">
type Props = ImageCollectionSelectProps

const ImageCollectionSelect: React.FC<Props> = (props: Props) => {

    const [path, setPath] = useState("");
    const [collections, setCollections] = useRecoilState(imageCollectionPathState)

    const addItem = () => {
        const some = collections.some((c) => c === path)
        if (path && !some) {
            setCollections([...collections, path])
        }
        setPath("")
    }

    const removeItem = (index: number) => {
        setCollections(collections.filter((_, cindex) => !(cindex === index)))
    }

    return (
        <Select
            style={{ width: 300 }}
            placeholder="Mohon masukkan"
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider style={{ margin: "8px 0" }} />
                    <div className="d-flex c-gap-2 px-2 pb-2">
                        <AntdInput
                            placeholder="D:\gambar_saya"
                            value={path}
                            onChange={setPath}
                        />
                        <Button
                            type="text"
                            icon={<i className="fas fa-plus" />}
                            onClick={() => addItem()}
                        >
                            Tambah
                        </Button>
                    </div>
                </>
            )}
            {...props}
            value={props.value || undefined}
        >
            {props.value && !collections.some((item) => item === props.value) && <Select.Option key="default" value={props.value}>
                <div className="d-flex c-item-center">
                    <span className="flex-1 c-truncate">{props.value}</span>
                </div>
            </Select.Option>}
            {collections.map((item, index) => <Select.Option key={index} value={item}>
                <div className="d-flex c-item-center">
                    <span className="flex-1 c-truncate">{item}</span>
                    {props.value !== item && <Button
                        type="text"
                        icon={<i className="fas fa-trash" />}
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            removeItem(index)
                        }}
                    />}
                </div>
            </Select.Option>)}

        </Select>
    );
};

export default ImageCollectionSelect
