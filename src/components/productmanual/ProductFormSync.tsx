import { Affix, Button, Card } from "antd"
import React from "react"

import { updateShopeeAttributes } from "../../api/shopee/attribute"
import { updateTokopediaAttributes } from "../../api/tokopedia/attribute"

const ProductFormSync: React.FC = () => {
    return <Affix offsetTop={16}>
        <Card>
            <div className="c-flex c-gap-2" style={{ flexWrap: "wrap" }}>
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
                    style={{
                        background: "#389e0d"
                    }}
                    icon={<i className="fas fa-sync" />}
                    onClick={updateTokopediaAttributes}
                >
                    Atribut Tokopedia
                </Button>
            </div>
        </Card>
    </Affix>
}

export default ProductFormSync
