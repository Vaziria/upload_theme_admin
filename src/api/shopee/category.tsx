import client from "../client"

export async function updateShopeeCategories(): Promise<void> {
    await client.get('/legacy/api/updateShopeeCategories')
}