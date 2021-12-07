import { store } from '..'
import { getSpinConfig } from '../../api/spin'

export async function loadSpin (): Promise<void> {
    const spin = await getSpinConfig()

    store.dispatch({
        type: 'spin/load',
        payload: {
            spin: spin.titlePool,
            config: spin.data
        }
    })
}
