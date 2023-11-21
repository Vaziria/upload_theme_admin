import { TokopediaAttributeResponse } from "../../model/newapisdk"
import client from "../client"

export async function getTokopediaAttribute(cat_id: number): Promise<TokopediaAttributeResponse> {
    const res = await client.get<TokopediaAttributeResponse>("/tokopedia/attribute/get_attribute", {
        params: { cat_id }
    })
    return res.data
}

export async function updateTokopediaAttributes(): Promise<void> {
    await client.get("/tokopedia/attribute/updater_attribute")
}
