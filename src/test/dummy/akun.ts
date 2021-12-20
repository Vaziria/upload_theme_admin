import { IAccount } from "../../model/Account"
import { fakeId } from "../utils/faker"

const dumpAkun = (): IAccount => ({
    active: false,
    pass: '',
    limit_upload: 0,
    count_upload: 0,
    water: '',
    shopee_categ: [0, 0, 0, 0],
    tokped_categ: ['', '', ''],
    type: '',
    name: fakeId(10),
    user: fakeId(10),
    markup: '',
    hastag: '',
    _id: fakeId(10)
})

export default dumpAkun

