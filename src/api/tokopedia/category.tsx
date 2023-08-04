import { clientTokopedia } from "../client"

export async function updateTokopediaCategories(): Promise<void> {
    await clientTokopedia.get("/api/updateTokpedCategories")
}