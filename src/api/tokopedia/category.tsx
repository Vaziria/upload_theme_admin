import client from "../client"

export async function updateTokopediaCategories(): Promise<void> {
    await client.get("/api/updateTokpedCategories")
}