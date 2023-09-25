import { Form, FormInstance } from "antd";
import React from "react";

import { UpdateVariationPayload } from "../../../model/apisdk";

interface Props {
    form: FormInstance<UpdateVariationPayload>
}

type ValueCache = {
    [key: string]: {
        img_path: string
        coalition: {
            [key: string]: {
                price: number
                stock: number
            }
        }
    }
}

const VariantOptionForm: React.FC<Props> = (props: Props) => {

    const [valueCache, setValueCache] = React.useState<ValueCache>({})

    const options = Form.useWatch("variant_option", props.form)
    React.useEffect(() => {

        if (options) {
            // create matrix here
        }

        console.log(options)
    }, [options])

    return <Form.Item<UpdateVariationPayload>>
        ahahha
    </Form.Item>
}

export default VariantOptionForm
