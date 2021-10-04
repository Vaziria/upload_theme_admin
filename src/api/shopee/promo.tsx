import { IPromosiTask } from "../../model/shopee/PromosiSetup"

export async function getPromoTask(): Promise<IPromosiTask[]> {
  const task: IPromosiTask = {
    id: "1234",
    akun: [],
    config: {
      count_product: 400,
      discount: 20,
      end_time: Date.now(),
      start_time: Date.now(),
      query: {}
    }
  }
  return [ task ]
}

export async function savePromoTask(): Promise<void> {
  console.log('not implemented')
}