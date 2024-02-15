import { MarketList } from "../model/Common";

export const MarketplaceColor: { [key in MarketList]: string } = {
    shopee: "#ff4d4f",
    tokopedia: "#52c41a",
    jakmall: "#fa541c",
    qlobot_shopee: "#fa541c"
}

export const MarketplaceColorDisabled: { [key in MarketList]: string } = {
    shopee: "#ffe7ba",
    tokopedia: "#d9f7be",
    jakmall: "#ffd8bf",
    qlobot_shopee: "#ffd8bf",
}
