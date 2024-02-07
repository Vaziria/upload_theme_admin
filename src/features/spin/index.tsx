import { store } from '..'
import { exampleSpin, getSpinConfig } from '../../api/spin'
import { ErrKey, Spin, SpinConfig } from '../../model/Spin'
import { LoadAction } from './SpinReducer'

export async function getExample (title: string): Promise<void> {
    const exTitle = await exampleSpin(title)

    store.dispatch({
        type: 'spin/example',
        payload: exTitle
    })
}

export async function loadSpin (): Promise<LoadAction["payload"]> {
    const spin = await getSpinConfig()

    if (spin.data?.title) {
        getExample(spin.data.title)
    }

    const payload = {
        spin: spin.titlePool,
        config: spin.data
    }
    store.dispatch({
        type: 'spin/load',
        payload: payload
    })

    return payload
}

export async function addSpin (spin: Spin): Promise<void> {
    store.dispatch({
        type: 'spin/add',
        payload: spin
    })
}

export async function deleteSpin (spin: Spin): Promise<void> {
    store.dispatch({
        type: 'spin/delete',
        payload: spin
    })
}

export async function errConfig (errKey: ErrKey[]): Promise<void> {
    store.dispatch({
        type: 'spin/config_err',
        payload: errKey
    })
}

export async function updateConfig (config: Partial<SpinConfig>, rmErrKey?: ErrKey): Promise<void> {
    if (rmErrKey) {
        const errKey = store.getState().SpinReducer.configErrKey
        const removeError = errKey.filter(key => key !== rmErrKey)
        errConfig(removeError)
    }

    store.dispatch({
        type: 'spin/config_update',
        payload: config
    })
}

