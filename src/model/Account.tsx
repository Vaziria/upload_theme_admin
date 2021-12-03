export interface IAccount {
    active: boolean
    pass: string
    limit_upload: number
    water: string
    namespace?: string
    shopee_categ: [number, number, number, number]
    tokped_categ: [string, string, string]
    type: string
    user: string
    _id: string
}
const defaccount: IAccount = {
    user: '',
	pass: '',
	water: '',
    namespace: '',
	type: '',
	tokped_categ: ['0', '0', '0'],
	shopee_categ: [0, 0, 0, 0],
	active: false,
	limit_upload: 2000,
    _id: ''
}

export class Account implements IAccount {
    active!: boolean
    limit_upload!: number
    pass!: string
    namespace?: string
    water!: string
    shopee_categ!: [number, number, number, number]
    tokped_categ!: [string, string, string]
    type!: string
    user!: string
    _id!: string

    constructor(account = defaccount) {
        this.user = account.user
        this.pass = account.pass
        this.water = account.water
        this.type = account.type
        this.tokped_categ = account.tokped_categ
        this.shopee_categ = account.shopee_categ
        this.active = account.active
        this.limit_upload = account.limit_upload
        this._id = account._id
    }

    setUserAccount (userAccount: Pick<IAccount, 'user' | 'pass' | 'namespace'>): void {
        this.user = userAccount.user
        this.pass = userAccount.pass
        this.namespace = userAccount.namespace
    }
}
