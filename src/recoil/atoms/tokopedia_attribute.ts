import { atom } from "recoil"
import { TokopediaAttributeResponse } from "../../model/newapisdk"

interface TokopediaAttributeForm {
    called: boolean
    pending: boolean
    data: TokopediaAttributeResponse
}

export const tokopediaAttributeFormState = atom<TokopediaAttributeForm>({
    key: "tokopediaAttributeForm",
    default: {
        called: false,
        pending: false,
        data: {
            exist: false,
            attributes: []
        }
    },
})
