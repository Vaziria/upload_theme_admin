import { Affix, Button, Card } from "antd"
import React from "react"

import { updateShopeeAttributes } from "../../api/shopee/attribute"

const ProductFormSync: React.FC = () => {
    return <Affix offsetTop={16}>
        <Card>
            <div className="c-flex c-gap-2">
                <Button
                    block
                    type="primary"
                    style={{
                        background: "#fa541c"
                    }}
                    icon={<i className="fas fa-sync" />}
                    onClick={updateShopeeAttributes}
                >
                    Atribut Shopee
                </Button>
                <Button
                    block
                    type="primary"
                    disabled={true}
                    style={{
                        // background: "#389e0d"
                    }}
                    icon={<i className="fas fa-sync" />}
                >
                    Atribut Tokopedia
                </Button>
            </div>
        </Card>
    </Affix>
}

export default ProductFormSync
