import { atom } from "recoil"
import { InfoRes } from "../../model/newapisdk"

export const infoState = atom<InfoRes>({
    key: "info",
    default: {
        lisensi: "",
        version: "",
    }
})
