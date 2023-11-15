import { message } from "antd"

import { useQuery } from "../../model/newapisdk"
import { ProductManualFormModel } from "../../model/product_manual/ProductManualForm"
import { useSetTokopediaAttribute } from "../../recoil/callbacks/set_tokopedia_attribute"
import { getErrMessage } from "../../utils/errmsg"

export function useInitTokopediaAttributeForm(pid: number, formModel: ProductManualFormModel): () => void {

    const { send: getAttributeTokopedia } = useQuery("GetPdcsourceAttrToped")
    const setTokopediaAttribute = useSetTokopediaAttribute()

    return () => {
        getAttributeTokopedia({
            query: {
                product_id: pid,
                attribute_type: "tokopedia"
            },
            async onSuccess({ data }) {
                const dataAttribute = data[0]
                if (dataAttribute) {
                    const { categories, attributes } = dataAttribute
                    const tokopediaAttribute = await setTokopediaAttribute(categories)
                    const mapAttribues = tokopediaAttribute.map((tottr) => {
                        return attributes.find((attr) =>
                            tottr.values.some((val) => val.id.toString() === attr)
                        ) || ""
                    })

                    formModel.form.setFieldsValue({
                        tokpedAttribute: {
                            data: {
                                categories,
                                attributes: mapAttribues
                            }
                        },
                    })
                }
            },
            onError(err) {
                const msg = getErrMessage(err as Error, "gagal mendapatkan attribute tokopedia.")
                message.error(msg)
            }
        })
    }
}
