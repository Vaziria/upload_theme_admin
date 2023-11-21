import { message } from "antd"

import { useQuery } from "../../model/apisdk"
import { ProductManualFormModel } from "../../model/product_manual/ProductManualForm"
import { useSetShopeeAttribute } from "../../recoil/callbacks/set_shopee_attribute"
import { getErrMessage } from "../../utils/errmsg"

export function useInitShopeeAttributeForm(pid: number, formModel: ProductManualFormModel): () => void {

    const { send: getAttributeShopee } = useQuery("GetPdcsourceAttShopee")
    const setShopeeAttribute = useSetShopeeAttribute()

    return () => {
        getAttributeShopee({
            query: {
                product_id: pid,
                attribute_type: "shopee"
            },
            async onSuccess({ data }) {
                const dataAttribute = data[0]
                if (dataAttribute) {
                    const { categories, attributes } = dataAttribute
                    const shopeeAttribues = await setShopeeAttribute(categories)
                    const mapAttribues = shopeeAttribues.map((sattr) => {
                        return attributes.find((attr) => attr?.attribute_id === sattr.attributeId)
                    })

                    formModel.form.setFieldsValue({
                        shopeeAttribute: {
                            data: {
                                categories,
                                attributes: mapAttribues
                            }
                        },
                    })
                }
            },
            onError(err) {
                const msg = getErrMessage(err as Error, "gagal mendapatkan attribute shopee.")
                message.error(msg)
            }
        })
    }
}
