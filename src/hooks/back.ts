import { useHistory, useLocation } from "react-router-dom"
import { Path } from "../routes/path"

export type Params<P> = { [K in keyof P]?: string  }
export type GoBack<P extends Params<P>> = (defpath?: Path, params?: P) => void

export function useGoBack<P extends Params<P>>(): GoBack<P> {
    const history = useHistory()
    const location = useLocation<{ fromParent?: boolean }>()

    function goBack(defpath?: Path, params?: P) {
        if (location.state?.fromParent) {
            history.goBack()
            return
        }

        if (defpath) {
            let fixpath: string = defpath
            if (params) {
                for (const key in params) {
                    const pathparam = ":" + key
                    if (defpath.includes(pathparam)) {
                        const a = params[key]
                        fixpath = defpath.replace(pathparam, a?.toString() || "")
                    }
                }
            }
    
            history.replace(fixpath)
        }
    }

    return goBack
}