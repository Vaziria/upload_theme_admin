import type { ValidatorRule } from 'rc-field-form/lib/interface';

import { UseOnceText } from "../../../../model/newapisdk";

async function validator(_: unknown, onceText?: UseOnceText[]): Promise<void> {
    const emptyLen = onceText?.filter((ot) => !ot.text).length
    if ((emptyLen || 0) > 0) {
        return Promise.reject(`${emptyLen} kolom kosong.`)
    }
    return Promise.resolve()
}

export const onceTextValidator: ValidatorRule = { validator }
