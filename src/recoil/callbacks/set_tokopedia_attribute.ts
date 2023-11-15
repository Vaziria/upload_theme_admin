import { useRecoilCallback } from "recoil"

import { getTokopediaAttribute } from "../../api/tokopedia/attribute"
import { AnnotationData } from "../../model/newapisdk"
import { tokopediaAttributeFormState } from "../atoms/tokopedia_attribute"

type TypeFunc = () => (categories: number[]) => Promise<AnnotationData[]>

export const useSetTokopediaAttribute: TypeFunc = () => {
    return useRecoilCallback(({ set }) => async (categories: number[]) => {
        try {
            set(tokopediaAttributeFormState, (attr) => ({
                ...attr,
                pending: true
            }))
    
            const catId = categories[categories.length - 1]
            const data = await getTokopediaAttribute(catId)
    
            set(tokopediaAttributeFormState, {
                data,
                called: true,
                pending: false
            })
    
            return data.attributes.reduce<AnnotationData[]>((res, val) => {
                if (val) {
                    return [...res, val]
                }
                return res
            }, [])
    
        } catch {
            set(tokopediaAttributeFormState, (attr) => ({
                ...attr,
                pending: false
            }))
        }
    
        return []
    })
}
