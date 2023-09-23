/* eslint-disable @typescript-eslint/no-explicit-any*/

import axios from "axios";
import { useState } from "react";

export class Uint extends Number {}
export class Int extends Number {}
export class Float32 extends Number {}
export class Float64 extends Number {}

export type MaybeUndefined<T> = T | undefined;
export type MaybeNull<T> = T | null;

export interface AttributeQuery {
	product_id: number
	attribute_type: string
}

export interface TokpedAttr {
	name: string
}

export interface AttributeResTokpedAttr {
	err_msg: string
	data: Array<TokpedAttr | undefined>
}

export interface CreateAttributePayloadTokpedAttr {
	product_id: number
	attribute_type: string
	data: TokpedAttr | undefined
}

export interface CreateAttributeResTokpedAttr {
	err_msg: string
	data: TokpedAttr | undefined
}

export interface ShopeeAttr {
	name: string
}

export interface AttributeResShopeeAttr {
	err_msg: string
	data: Array<ShopeeAttr | undefined>
}

export interface CreateAttributePayloadShopeeAttr {
	product_id: number
	attribute_type: string
	data: ShopeeAttr | undefined
}

export interface CreateAttributeResShopeeAttr {
	err_msg: string
	data: ShopeeAttr | undefined
}

export interface Collection {
	id: number
	name: string
	created_at: string
	updated_at: string
}

export interface CollectionCreateRes {
	err_msg: string
	id: number
	name: string
	created_at: string
	updated_at: string
}

export interface CollectionResList {
	err_msg: string
	data: Array<Collection | undefined>
}

export interface ColDeletePayload {
	collection_ids: Array<number>
}

export interface ProductListQuery {
	coll_id: number
}

export interface AttributeProduct {
	id: number
	product_id: number
	attribute_type: string
	data: string
}

export interface UseOnceText {
	id: number
	field_config_id: number
	text: string
}

export interface FieldConfig {
	id: number
	product_id: number
	field_type: string
	use_spin: boolean
	spin_text: string
	use_once_text: boolean
	once_text: Array<UseOnceText | undefined>
}

export interface VariantOption {
	id: number
	product_id: number
	name: string
	option: Array<string>
}

export interface Variant {
	id: number
	product_id: number
	names: Array<string>
	values: Array<string>
	price: number
	image_preview: string
	image_collection_path: string
	count_image: number
}

export interface WatermarkConfig {
	id: number
	product_id: number
	text: string
	font_location: string
	pos_x: string
	pos_y: string
	use_watermark: boolean
}

export interface FrameConfig {
	id: number
	product_id: number
	use_frame: boolean
	frame_location: string
}

export interface ProductMap {
	id: number
	map_id: string
	product_id: number
	url_product: string
}

export interface ManualProduct {
	id: number
	as_draft: boolean
	image_preview: string
	image_collection_path: string
	count_image: number
	title: string
	price: number
	desc: string
	use_variant: boolean
	use_markup: string
	weight: number
	attribute: Array<AttributeProduct | undefined>
	field_spin: Array<FieldConfig | undefined>
	variant_option: Array<VariantOption | undefined>
	variant: Array<Variant | undefined>
	collection: Array<Collection | undefined>
	watermark: WatermarkConfig | undefined
	frame_config: FrameConfig | undefined
	last_error: string
	map: Array<ProductMap | undefined>
}

export interface ProductListRes {
	err_msg: string
	data: Array<ManualProduct | undefined>
}

export interface ProductCreatePayload {
	coll_id: number
}

export interface ApiResponse {
	err_msg: string
}

export interface DeleteProductPayload {
	ids: Array<number>
}

export interface ItemQuery {
	product_id: number
}

export interface ItemRes {
	err_msg: string
	data: ManualProduct | undefined
}

export interface NewProductQuery {
	coll_id: number
}

export interface NewProductResponse {
	err_msg: string
	data: ManualProduct | undefined
}

export interface CreatePayload {
	product_id: number
}

export interface BasicUpdatePayload {
	product_id: number
	image_preview: string
	image_collection_path: string
	count_image: number
	title: string
	price: number
	desc: string
	use_variant: boolean
	use_markup: string
	weight: number
}

export interface UpdateVariationPayload {
	product_id: number
	variant_option: Array<VariantOption | undefined>
	variant: Array<Variant | undefined>
}

export interface UpdateFieldConfigPayload {
	product_id: number
	field_spin: Array<FieldConfig | undefined>
}

export interface SpinConfigQuery {
	field_config_id: number
}

export interface ListTextRes {
	err_msg: string
	count: number
	data: Array<UseOnceText | undefined>
}

export interface AddTextPayload {
	field_config_id: number
	data: Array<string>
}

export interface PathCheckPayload {
	path: string
}

export interface PathCheckResponse {
	err_msg: string
	is_abs: boolean
	Absolute: string
	exist: boolean
}



export const clients = {
	GetPdcsourceAttrToped: {
		url: "pdcsource/attr_toped" as const,
		method: "GET" as const,
		query: {
				product_id: 0,
				attribute_type: ``
			} as AttributeQuery ,
		body: {},
		response: {
				err_msg: ``,
				data: [
				{
						name: ``
					} as TokpedAttr | undefined
				] as Array<TokpedAttr | undefined>
			} as AttributeResTokpedAttr 
	},
	PutPdcsourceAttrToped: {
		url: "pdcsource/attr_toped" as const,
		method: "PUT" as const,
		query: undefined,
		body: {
				product_id: 0,
				attribute_type: ``,
				data: {
						name: ``
					} as TokpedAttr | undefined
			} as CreateAttributePayloadTokpedAttr ,
		response: {
				err_msg: ``,
				data: {
						name: ``
					} as TokpedAttr | undefined
			} as CreateAttributeResTokpedAttr 
	},
	GetPdcsourceAttShopee: {
		url: "pdcsource/att_shopee" as const,
		method: "GET" as const,
		query: {
				product_id: 0,
				attribute_type: ``
			} as AttributeQuery ,
		body: {},
		response: {
				err_msg: ``,
				data: [
				{
						name: ``
					} as ShopeeAttr | undefined
				] as Array<ShopeeAttr | undefined>
			} as AttributeResShopeeAttr 
	},
	PutPdcsourceAttShopee: {
		url: "pdcsource/att_shopee" as const,
		method: "PUT" as const,
		query: undefined,
		body: {
				product_id: 0,
				attribute_type: ``,
				data: {
						name: ``
					} as ShopeeAttr | undefined
			} as CreateAttributePayloadShopeeAttr ,
		response: {
				err_msg: ``,
				data: {
						name: ``
					} as ShopeeAttr | undefined
			} as CreateAttributeResShopeeAttr 
	},
	PostPdcsourceCollectionCreate: {
		url: "pdcsource/collection/create" as const,
		method: "POST" as const,
		query: undefined,
		body: {
				id: 0,
				name: ``,
				created_at: `2021-12-01T07:00:00+07:00`,
				updated_at: `2021-12-01T07:00:00+07:00`
			} as Collection ,
		response: {
				err_msg: ``,
				id: 0,
				name: ``,
				created_at: `2021-12-01T07:00:00+07:00`,
				updated_at: `2021-12-01T07:00:00+07:00`
			} as CollectionCreateRes 
	},
	GetPdcsourceCollectionList: {
		url: "pdcsource/collection/list" as const,
		method: "GET" as const,
		query: undefined,
		body: {},
		response: {
				err_msg: ``,
				data: [
				{
						id: 0,
						name: ``,
						created_at: `2021-12-01T07:00:00+07:00`,
						updated_at: `2021-12-01T07:00:00+07:00`
					} as Collection | undefined
				] as Array<Collection | undefined>
			} as CollectionResList 
	},
	DeletePdcsourceCollection: {
		url: "pdcsource/collection" as const,
		method: "DELETE" as const,
		query: undefined,
		body: {
				collection_ids: [
				0
				] as Array<number>
			} as ColDeletePayload ,
		response: {} as any
	},
	GetPdcsourceProductList: {
		url: "pdcsource/product/list" as const,
		method: "GET" as const,
		query: {
				coll_id: 0
			} as ProductListQuery ,
		body: {},
		response: {
				err_msg: ``,
				data: [
				{
						id: 0,
						as_draft: false,
						image_preview: ``,
						image_collection_path: ``,
						count_image: 0,
						title: ``,
						price: 0,
						desc: ``,
						use_variant: false,
						use_markup: ``,
						weight: 0,
						attribute: [
						{
								id: 0,
								product_id: 0,
								attribute_type: ``,
								data: ``
							} as AttributeProduct | undefined
						] as Array<AttributeProduct | undefined>,
						field_spin: [
						{
								id: 0,
								product_id: 0,
								field_type: ``,
								use_spin: false,
								spin_text: ``,
								use_once_text: false,
								once_text: [
								{
										id: 0,
										field_config_id: 0,
										text: ``
									} as UseOnceText | undefined
								] as Array<UseOnceText | undefined>
							} as FieldConfig | undefined
						] as Array<FieldConfig | undefined>,
						variant_option: [
						{
								id: 0,
								product_id: 0,
								name: ``,
								option: [
								``
								] as Array<string>
							} as VariantOption | undefined
						] as Array<VariantOption | undefined>,
						variant: [
						{
								id: 0,
								product_id: 0,
								names: [
								``
								] as Array<string>,
								values: [
								``
								] as Array<string>,
								price: 0,
								image_preview: ``,
								image_collection_path: ``,
								count_image: 0
							} as Variant | undefined
						] as Array<Variant | undefined>,
						collection: [
						{
								id: 0,
								name: ``,
								created_at: `2021-12-01T07:00:00+07:00`,
								updated_at: `2021-12-01T07:00:00+07:00`
							} as Collection | undefined
						] as Array<Collection | undefined>,
						watermark: {
							id: 0,
							product_id: 0,
							text: ``,
							font_location: ``,
							pos_x: ``,
							pos_y: ``,
							use_watermark: false
						} as WatermarkConfig | undefined,
						frame_config: {
							id: 0,
							product_id: 0,
							use_frame: false,
							frame_location: ``
						} as FrameConfig | undefined,
						last_error: ``,
						map: [
						{
								id: 0,
								map_id: ``,
								product_id: 0,
								url_product: ``
							} as ProductMap | undefined
						] as Array<ProductMap | undefined>
					} as ManualProduct | undefined
				] as Array<ManualProduct | undefined>
			} as ProductListRes 
	},
	PostPdcsourceProductCreate: {
		url: "pdcsource/product/create" as const,
		method: "POST" as const,
		query: undefined,
		body: {
				coll_id: 0
			} as ProductCreatePayload ,
		response: {
				err_msg: ``
			} as ApiResponse 
	},
	DeletePdcsourceProduct: {
		url: "pdcsource/product" as const,
		method: "DELETE" as const,
		query: undefined,
		body: {
				ids: [
				0
				] as Array<number>
			} as DeleteProductPayload ,
		response: {
				err_msg: ``
			} as ApiResponse 
	},
	GetPdcsourceProductItem: {
		url: "pdcsource/product/item" as const,
		method: "GET" as const,
		query: {
				product_id: 0
			} as ItemQuery ,
		body: {},
		response: {
				err_msg: ``,
				data: {
						id: 0,
						as_draft: false,
						image_preview: ``,
						image_collection_path: ``,
						count_image: 0,
						title: ``,
						price: 0,
						desc: ``,
						use_variant: false,
						use_markup: ``,
						weight: 0,
						attribute: [
						{
								id: 0,
								product_id: 0,
								attribute_type: ``,
								data: ``
							} as AttributeProduct | undefined
						] as Array<AttributeProduct | undefined>,
						field_spin: [
						{
								id: 0,
								product_id: 0,
								field_type: ``,
								use_spin: false,
								spin_text: ``,
								use_once_text: false,
								once_text: [
								{
										id: 0,
										field_config_id: 0,
										text: ``
									} as UseOnceText | undefined
								] as Array<UseOnceText | undefined>
							} as FieldConfig | undefined
						] as Array<FieldConfig | undefined>,
						variant_option: [
						{
								id: 0,
								product_id: 0,
								name: ``,
								option: [
								``
								] as Array<string>
							} as VariantOption | undefined
						] as Array<VariantOption | undefined>,
						variant: [
						{
								id: 0,
								product_id: 0,
								names: [
								``
								] as Array<string>,
								values: [
								``
								] as Array<string>,
								price: 0,
								image_preview: ``,
								image_collection_path: ``,
								count_image: 0
							} as Variant | undefined
						] as Array<Variant | undefined>,
						collection: [
						{
								id: 0,
								name: ``,
								created_at: `2021-12-01T07:00:00+07:00`,
								updated_at: `2021-12-01T07:00:00+07:00`
							} as Collection | undefined
						] as Array<Collection | undefined>,
						watermark: {
							id: 0,
							product_id: 0,
							text: ``,
							font_location: ``,
							pos_x: ``,
							pos_y: ``,
							use_watermark: false
						} as WatermarkConfig | undefined,
						frame_config: {
							id: 0,
							product_id: 0,
							use_frame: false,
							frame_location: ``
						} as FrameConfig | undefined,
						last_error: ``,
						map: [
						{
								id: 0,
								map_id: ``,
								product_id: 0,
								url_product: ``
							} as ProductMap | undefined
						] as Array<ProductMap | undefined>
					} as ManualProduct | undefined
			} as ItemRes 
	},
	GetPdcsourceEditNew: {
		url: "pdcsource/edit/new" as const,
		method: "GET" as const,
		query: {
				coll_id: 0
			} as NewProductQuery ,
		body: {},
		response: {
				err_msg: ``,
				data: {
						id: 0,
						as_draft: false,
						image_preview: ``,
						image_collection_path: ``,
						count_image: 0,
						title: ``,
						price: 0,
						desc: ``,
						use_variant: false,
						use_markup: ``,
						weight: 0,
						attribute: [
						{
								id: 0,
								product_id: 0,
								attribute_type: ``,
								data: ``
							} as AttributeProduct | undefined
						] as Array<AttributeProduct | undefined>,
						field_spin: [
						{
								id: 0,
								product_id: 0,
								field_type: ``,
								use_spin: false,
								spin_text: ``,
								use_once_text: false,
								once_text: [
								{
										id: 0,
										field_config_id: 0,
										text: ``
									} as UseOnceText | undefined
								] as Array<UseOnceText | undefined>
							} as FieldConfig | undefined
						] as Array<FieldConfig | undefined>,
						variant_option: [
						{
								id: 0,
								product_id: 0,
								name: ``,
								option: [
								``
								] as Array<string>
							} as VariantOption | undefined
						] as Array<VariantOption | undefined>,
						variant: [
						{
								id: 0,
								product_id: 0,
								names: [
								``
								] as Array<string>,
								values: [
								``
								] as Array<string>,
								price: 0,
								image_preview: ``,
								image_collection_path: ``,
								count_image: 0
							} as Variant | undefined
						] as Array<Variant | undefined>,
						collection: [
						{
								id: 0,
								name: ``,
								created_at: `2021-12-01T07:00:00+07:00`,
								updated_at: `2021-12-01T07:00:00+07:00`
							} as Collection | undefined
						] as Array<Collection | undefined>,
						watermark: {
							id: 0,
							product_id: 0,
							text: ``,
							font_location: ``,
							pos_x: ``,
							pos_y: ``,
							use_watermark: false
						} as WatermarkConfig | undefined,
						frame_config: {
							id: 0,
							product_id: 0,
							use_frame: false,
							frame_location: ``
						} as FrameConfig | undefined,
						last_error: ``,
						map: [
						{
								id: 0,
								map_id: ``,
								product_id: 0,
								url_product: ``
							} as ProductMap | undefined
						] as Array<ProductMap | undefined>
					} as ManualProduct | undefined
			} as NewProductResponse 
	},
	PutPdcsourceEditPublish: {
		url: "pdcsource/edit/publish" as const,
		method: "PUT" as const,
		query: undefined,
		body: {
				product_id: 0
			} as CreatePayload ,
		response: {
				err_msg: ``
			} as ApiResponse 
	},
	PostPdcsourceEditSetBasic: {
		url: "pdcsource/edit/set_basic" as const,
		method: "POST" as const,
		query: undefined,
		body: {
				product_id: 0,
				image_preview: ``,
				image_collection_path: ``,
				count_image: 0,
				title: ``,
				price: 0,
				desc: ``,
				use_variant: false,
				use_markup: ``,
				weight: 0
			} as BasicUpdatePayload ,
		response: {
				err_msg: ``
			} as ApiResponse 
	},
	PostPdcsourceEditVariationUpdate: {
		url: "pdcsource/edit/variation_update" as const,
		method: "POST" as const,
		query: undefined,
		body: {
				product_id: 0,
				variant_option: [
				{
						id: 0,
						product_id: 0,
						name: ``,
						option: [
						``
						] as Array<string>
					} as VariantOption | undefined
				] as Array<VariantOption | undefined>,
				variant: [
				{
						id: 0,
						product_id: 0,
						names: [
						``
						] as Array<string>,
						values: [
						``
						] as Array<string>,
						price: 0,
						image_preview: ``,
						image_collection_path: ``,
						count_image: 0
					} as Variant | undefined
				] as Array<Variant | undefined>
			} as UpdateVariationPayload ,
		response: {
				err_msg: ``
			} as ApiResponse 
	},
	PostPdcsourceEditFieldConfig: {
		url: "pdcsource/edit/field_config" as const,
		method: "POST" as const,
		query: undefined,
		body: {
				product_id: 0,
				field_spin: [
				{
						id: 0,
						product_id: 0,
						field_type: ``,
						use_spin: false,
						spin_text: ``,
						use_once_text: false,
						once_text: [
						{
								id: 0,
								field_config_id: 0,
								text: ``
							} as UseOnceText | undefined
						] as Array<UseOnceText | undefined>
					} as FieldConfig | undefined
				] as Array<FieldConfig | undefined>
			} as UpdateFieldConfigPayload ,
		response: {
				err_msg: ``
			} as ApiResponse 
	},
	GetPdcsourceSpinListText: {
		url: "pdcsource/spin/list_text" as const,
		method: "GET" as const,
		query: {
				field_config_id: 0
			} as SpinConfigQuery ,
		body: {},
		response: {
				err_msg: ``,
				count: 0,
				data: [
				{
						id: 0,
						field_config_id: 0,
						text: ``
					} as UseOnceText | undefined
				] as Array<UseOnceText | undefined>
			} as ListTextRes 
	},
	PostPdcsourceSpinAddText: {
		url: "pdcsource/spin/add_text" as const,
		method: "POST" as const,
		query: undefined,
		body: {
				field_config_id: 0,
				data: [
				``
				] as Array<string>
			} as AddTextPayload ,
		response: {
				err_msg: ``
			} as ApiResponse 
	},
	PostPdcsourceFsCheck: {
		url: "pdcsource/fs/check" as const,
		method: "POST" as const,
		query: undefined,
		body: {
				path: ``
			} as PathCheckPayload ,
		response: {
				err_msg: ``,
				is_abs: false,
				Absolute: ``,
				exist: false
			} as PathCheckResponse 
	}
}

export type Fn<T> = (a: T) => void;

export type SendOptions<Data, Query, Err = Error> = {
    onSuccess?: Fn<Data>;
    onError?: Fn<Err>;
    query?: Query;
};

export type ClientReturn<Data, Query, Err = Error> = {
    pending: boolean;
    data: MaybeNull<Data>;
    error: MaybeNull<Err>;
    send: Fn<SendOptions<Data, Query, Err>>;
};

export type Clients = typeof clients;
export type Target = keyof Clients;

export function useQuery<
    K extends Target,
    R extends Clients[K]["response"],
    Q extends Clients[K]["query"]
>(action: K, options?: SendOptions<R, Q>): ClientReturn<R, Q> {
    const uri = clients[action].url;
    const method = clients[action].method;
    const queryOptions = options;

    const [pending, setPending] = useState(false);
    const [data, setData] = useState<MaybeNull<R>>(null);
    const [error, setError] = useState<MaybeNull<Error>>(null);

    async function send(options: SendOptions<R, Q> | undefined = queryOptions) {
        setPending(true);

        const query = options?.query;

        try {
            const { data } = await axios({
                method,
                url: uri,
                ...(query
                    ? {
                          params: query
                      }
                    : {})
            });

            options?.onSuccess?.(data);
            setData(data);
            setError(null);
        } catch (e) {
            options?.onError?.(e as any);
            setError(e as any);
            setData(null);
        } finally {
            setPending(false);
        }
    }

    return {
        data,
        error,
        pending,
        send
    };
}
