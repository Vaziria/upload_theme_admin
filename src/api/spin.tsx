import { Spin, SpinConfig } from "../model/Spin";
import client from "./client";


export async function getSpinConfig (): Promise<{
    data: SpinConfig,
    titlePool: Spin[]
}> {
    const res = await client.get('/api/settingSpin')
    return res.data
}
