import { store } from ".."
import { getConfigDeleteProduct } from "../../api/tool"

export async function getConfig(): Promise<void> {
  const deletfilter = await getConfigDeleteProduct()
  store.dispatch({
    type: 'deleter/filter',
    payload: deletfilter.data
  })
}