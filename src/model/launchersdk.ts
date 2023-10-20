/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { useState } from "react";

export class Uint extends Number {}
export class Int extends Number {}
export class Float32 extends Number {}
export class Float64 extends Number {}

export type MaybeUndefined<T> = T | undefined;
export type MaybeNull<T> = T | null;

export interface GrabShopeeQueryCli {
	base: string
}

export interface GrabTokopediaQueryCli {
	base: string
}

export interface DataSpinQuery {
	name: string
}

export interface DataSpinItemResponse {
	name: string
	data: Array<string>
}

export interface BaseResponse {
	errcode: number
	message: string
	status: string
}

export interface DataSpinDeleteQuery {
	name: string
}

export interface SettingSpinData {
	smin: number
	smax: number
	merek_ins_t: boolean
	title: string
	desc: string
}

export interface SettingSpinTitlePool {
	name: string
	data: string
}

export interface SettingSpinResponse {
	data: SettingSpinData | undefined
	errcode: number
	titlePool: Array<SettingSpinTitlePool>
}

export interface SettingSpinConfigUpdatePayload {
	name: string
	titlePool: Array<SettingSpinTitlePool>
}

export interface ProductMatchStageQuery {
	is_public: boolean
	kota: string
	marketplace: string
	namespace: string
	pmax: number
	pmin: number
}

export interface ProductNamespaceAgg {
	count: number
	price_min: number
	price_max: number
	name: string
}

export interface ProductPriceRangeAggQuery {
	is_public: boolean
	kota: string
	marketplace: string
	namespace: string
	pmax: number
	pmin: number
	range_price: number
}

export interface ProductPriceRangeAgg {
	_id: Array<number>
	count: number
}

export interface ProductCategoryAgg {
	_id: number
	price_min: number
	price_max: number
	count: number
	name: Array<string>
}

export interface ProductCityAgg {
	_id: string
	price_min: number
	price_max: number
	count: number
}

export interface ShopeeCategoryOld {
	parent_category: number
	catid: number
	parent_display_name: string
	display_name: string
	status: string
}

export interface ProductNamespaceRenamePayload {
	marketplace: string
	namespace: string
	update_namespace: string
}

export interface ListMarkupResponse {
	errcode: number
	message: string
	status: string
	data: Array<string>
}

export interface MarkupData {
	mark: string
	type: string
	range: any
	up: null
}

export interface Markup {
	data: Array<MarkupData>
	fix_mark: number
	name: string
}

export interface MarkupGetQuery {
	name: string
}

export interface MarkupGetResponse {
	data: Array<MarkupData>
	fix_mark: number
	name: string
	errorcode: number
}

export interface SearchFilterDynamicShipping {
	positionid: number
	name: string
	channelids: Array<string>
	display_name: string
	item_tag_ids: Array<number>
}

export interface RegionSetting {
	enable_size_chart: boolean
	low_stock_value: number
	dimension_mandatory: boolean
}

export interface CategoryTreeItem {
	id: number
	name: string
	display_name: string
	parent_id: number
	has_active_children: boolean
	has_children: boolean
	region_setting: RegionSetting | undefined
	is_prohibit: boolean
	children: Array<CategoryTreeItem | undefined>
}

export interface ShopeeCategory {
	id: number
	name: string
	display_name: string
	parent_id: number
	has_active_children: boolean
	has_children: boolean
	region_setting: RegionSetting | undefined
	is_prohibit: boolean
	children: Array<CategoryTreeItem | undefined>
	chain_name: Array<string>
	chain_ids: Array<number>
}

export interface CategoryMain {
	catid: number
	display_name: string
	name: string
	image: string
	is_adult: any
	parent_category: number
	sort_weight: number
	block_buyer_platform: any
}

export interface CategorySubSub {
	catid: number
	display_name: string
	image: string
	block_buyer_platform: any
}

export interface CategorySub {
	catid: number
	display_name: string
	name: string
	image: string
	is_adult: any
	parent_category: number
	sort_weight: number
	block_buyer_platform: any
	sub_sub: Array<CategorySubSub>
}

export interface CategoryItem {
	main: CategoryMain
	sub: Array<CategorySub>
}

export interface ManifestResponse {
	category: Array<ShopeeCategory>
	public_category_repo: Array<CategoryItem>
}

export interface PredictWeightPayload {
	itemid: number
	shopid: number
}

export interface PredictWeightResponse {
	harga: number
	jarak: number
}

export interface PredictWeightSaveQuery {
	predict: number
}

export interface PredictWeightLoadResponse {
	predict_weight: number
}

export interface SettingCropResponse {
	name: string
	data: null
	errcode: number
}

export interface SettingCrop {
	name: string
	data: null
}

export interface SettingIntResponse {
	name: string
	data: number
}

export interface SettingUploadIntervalData {
	uptmax: number
	uptmin: number
}

export interface SettingUploadIntervalResponse {
	name: string
	data: SettingUploadIntervalData
}

export interface SettingStrResponse {
	name: string
	data: string
}

export interface SettingGrabData {
	penjualan: number
	prosentase: number
	stock: number
	tokped_point: Array<number>
}

export interface SettingGrabResponse {
	name: string
	data: SettingGrabData
}

export interface SettingLastActiveData {
	active: boolean
	days: number
}

export interface SettingLastActiveResponse {
	name: string
	data: SettingLastActiveData
}

export interface GrabShopeeQuery {
	by: string
	locations: Array<string>
	official_mall: boolean
	price_max: number
	price_min: number
	rating_filter: number
	shopee24: boolean
	shopee_verified: boolean
}

export interface SettingGrabFilterShopeeResponse {
	name: string
	data: GrabShopeeQuery
}

export interface GrabShopeeProductCreated {
	active: boolean
	max: number
	min: number
}

export interface GrabShopeeShipping {
	channelids: Array<string>
	display_name: string
	name: string
	item_tag_ids: Array<number>
	positionid: number
}

export interface SettingGrabFilterShopeeExtraResponse {
	product_created: GrabShopeeProductCreated
	shippings: Array<GrabShopeeShipping>
}

export interface CrawlerConfig {
	username: string
	password: string
	email: string
	email_password: string
}

export interface GrabTokopediaQuery {
	pmin: number
	pmax: number
	ob: string
	rt: string
	condition: string
	fcity: Array<string>
	goldmerchant: boolean
	official: boolean
	shipping: Array<string>
	preorder: boolean
}

export interface SettingGrabFilterTokopedia {
	name: string
	data: GrabTokopediaQuery
}

export interface SettingGrabFilterTokopediaResponse {
	errcode: number
	data: SettingGrabFilterTokopedia
}

export interface Cloudinary {
	active: boolean
	url: string
}

export interface SettingCloudinaryResponse {
	name: string
	data: Cloudinary
}

export interface SettingBoolResponse {
	name: string
	data: boolean
}

export interface RandomAttribute {
	active: boolean
	force_tidakada: boolean
}

export interface SettingRandomAttributeResponse {
	name: string
	data: RandomAttribute
}

export interface SettingTextFilterResponse {
	data: Array<string>
	errcode: number
	name: string
}

export interface SettingTextFilterPayload {
	data: Array<string>
	name: string
}

export interface GrabBasicBlacklistData {
	data: Array<string>
	filename: string
}

export interface GrabBasicBlacklist {
	active: boolean
	shopee: GrabBasicBlacklistData
}

export interface SettingDefaultResponse {
	_id: string
	name: string
	use_price_discount: boolean
	blacklist_username: GrabBasicBlacklist
}

export interface SettingFilterWordQuery {
	name: string
	makedefault: boolean
}

export interface Akun {
	_id: string
	user: string
	name: string
	pass: string
	password: string
	active: boolean
	limit_upload: number
	count_upload: number
	namespace: string
	water: string
	shopee_categ: Array<string>
	tokped_categ: Array<string>
	type: string
	markup: string
	hastag: string
	last_up: number
	polatitle: string
	is_running_upload: boolean
}

export interface AkunFormPayload {
	data: Akun
}

export interface AkunDeletePayload {
	data: Array<string>
}

export interface AkunListQuery {
	start: number
	limit: number
	active: string
	last: number
	search: string
	sort: string
	reverse: number
}

export interface AkunListResponse {
	akuns: Array<Akun>
	count: number
	errcode: number
}

export interface UploadShipping {
	channelid: number
	enabled: boolean
}

export interface UploadConfig {
	shipping: Array<UploadShipping>
	use_custom_shipping: boolean
}

export interface UploadProductShippingLimits {
	item_min_weight: number
}

export interface UploadProductShipping {
	channel_id: number
	name: string
	display_name: string
	name_key: string
	flag: string
	service_type: string
	default_price: string
	min_default_price: string
	max_default_price: string
	limits: UploadProductShippingLimits
	sizes: Array<any>
	cover_shipping_fee: boolean
	enabled: boolean
	item_flag: string
	price: string
	size: number
	size_id: number
	save_into_item: boolean
	volumetric_factor: number
	conflicting_enabled_channels: any
	is_mask_channel: boolean
	parent_channel_id: number
	item_exclusive_channels: Array<number>
	related_enabled_channels: Array<any>
	related_disabled_channels: Array<any>
}

export interface ConfigAccountPayload {
	data: string
}

export interface BotConfigCaptcha {
	user: string
	pass: string
}

export interface BotConfigDatabase {
	DB_URI: string
	DB_NAME: string
}

export interface BotConfigLisensi {
	email: string
	pwd: string
}

export interface BotConfig {
	captcha: BotConfigCaptcha
	database: BotConfigDatabase
	lisensi: BotConfigLisensi
	suplier_csv: boolean
	session_storage_source: string
	session_storage_local_location: string
	thread_count: number
	tor_directory: string
	tor_print_ip: boolean
	tor_proxy: boolean
}

export interface DeleteConfig {
	akun: string
	awaltanggal: string
	blokir: boolean
	delete: number
	diarsipkan: boolean
	diperiksa: boolean
	sold: number
	tanggal: string
	view: number
}

export interface DeleteProductHarga {
	min: number
	max: number
}

export interface DeleteProduct {
	fil_category: boolean
	fil_harga: boolean
	fil_keyword: boolean
	category: Array<Array<number>>
	harga: DeleteProductHarga
	keyword: string
}

export interface ConfigDeleteExtraResponse {
	name: string
	data: DeleteProduct
}

export interface ShopeeCateg {
	parent_category: number
	catid: number
	parent_display_name: string
	display_name: string
	is_collection: number
}

export interface GrabTasker {
	_id: string
	toko_username: string
	mode: string
	marketplace: string
	product_url: string
	namespace: string
	tokped_categ: Array<string>
	use_filter: boolean
	keyword: string
	shopee_categ: ShopeeCateg
}

export interface DumpCategoryQuery {
}

export interface CategoryTokopediaMapQuery {
	action: string
}

export interface CategoryTokopediaMapItem {
	shopee_categ: Array<string>
}

export interface HastagDataResponse {
	name: string
	data: Array<string>
}

export interface HastagUpdatePayload {
	name: string
	data: Array<string>
}

export interface HastagDeleteQuery {
	name: string
}

export interface HastagLimitResponse {
	name: string
	data: null
}

export interface ExampleSpinProductsQuery {
	harga: string
	hastag: string
	polatitle: string
}

export interface MarkupDebug {
	fix_harga: number
	harga_asli: number
	harga_up: number
	markup_item_index: number
	up_percent: number
	up_price: number
	up_fix: number
}

export interface SpinProductExample {
	name: string
	price: number
	price_untung: number
	desc: string
	markup_debug: MarkupDebug
}

export interface ExampleSpinTitleQuery {
	title: string
}

export interface ExampleSpinTitleResponse {
	text: string
}

export interface CheckbotQueryCli {
	base: string
	cek: string
	out: string
}

export interface CheckOrderQueryCli {
	base: string
	akun_limit: number
	queue_size: number
	filepath: string
	output: string
}

export interface DeleteProductQueryCli {
	base: string
	report: string
}

export interface UpdaterAttributeCli {
	base: string
}

export interface ExportSupplierQuery {
	namespace: string
}

export interface ExportUrlQuery {
	namespace: string
}

export interface WeightPredictionItem {
	price_min: number
	price_max: number
	ratio: number
}

export interface WeightPrediction {
	data: Array<WeightPredictionItem | undefined>
}

export interface AttributeQuery {
}

export interface Lang {
	language: string
	value: string
}

export interface AttrChild {
	multiLang: Array<Lang>
	displayName: string
	valueId: number
	valueType: number
}

