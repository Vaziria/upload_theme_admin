import { store } from '..'
import { getSpinConfig } from '../../api/spin'
import { Spin, SpinConfig } from '../../model/Spin'

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

export async function addSpin (spin: Spin): Promise<void> {
    store.dispatch({
        type: 'spin/add',
        payload: spin
    })
}

export async function updateConfig (config: Partial<SpinConfig>): Promise<void> {
    store.dispatch({
        type: 'spin/config_update',
        payload: config
    })
}
