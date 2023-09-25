import { Form } from "antd";
import React from "react";

import { BasicUpdatePayload } from "../../../model/apisdk";
import MarkupSelectNew from "../../common/MarkupSelectNew";

const UseMarkupForm: React.FC = () => {

    return <Form.Item<BasicUpdatePayload>
        label="Markup"
        name="use_markup"
    >
        <MarkupSelectNew style={{ minWidth: 200, width: 300  }} />
    </Form.Item>
}

export default UseMarkupForm
