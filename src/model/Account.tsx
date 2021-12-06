export type AccountMode = 'keyword' | 'category' | 'url'

export interface IAccount {
    active: boolean
    pass: string
    limit_upload: number
    count_upload: number
    water: string
    namespace?: string
    shopee_categ: [number, number, number, number]
    tokped_categ: [string, string, string]
    type: string
    name: string
    user: string
    mode?: AccountMode
    polatitle?: string
    last_up?: number
    _id: string
}
const defaccount: IAccount = {
    name: '',
    user: '',
	pass: '',
	water: '',
    namespace: '',
	type: '',
	tokped_categ: ['0', '0', '0'],
	shopee_categ: [0, 0, 0, 0],
	active: false,
	limit_upload: 2000,
    count_upload: 0,
    _id: ''
}

export class Account implements IAccount {
    active!: boolean
    limit_upload!: number
    count_upload!:number
    pass!: string
    namespace?: string
    water!: string
    shopee_categ!: [number, number, number, number]
    tokped_categ!: [string, string, string]
    type!: string
    name!: string
    user!: string
    mode?: AccountMode
    polatitle?: string
    last_up?: number
    _id!: string

    constructor(account = defaccount) {
        this.name = account.name
        this.user = account.user
        this.pass = account.pass
        this.water = account.water
        this.type = account.type
        this.tokped_categ = account.tokped_categ
        this.shopee_categ = account.shopee_categ
        this.active = account.active
        this.limit_upload = account.limit_upload
        this.count_upload = account.count_upload
        this.namespace = account.namespace
        this.mode = account.mode
        this.polatitle = account.polatitle
        this.last_up = account.last_up
        this._id = account._id
    }

    setUserAccount (userAccount: Pick<IAccount, 'user' | 'pass' | 'namespace'>): void {
        this.user = userAccount.user
        this.pass = userAccount.pass
        this.namespace = userAccount.namespace
    }
}
