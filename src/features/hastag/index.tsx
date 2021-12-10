import { store } from '..'
import { getHastags } from '../../api/hastag'

export async function loadHastags (): Promise<void> {
    const hastags = await getHastags()

    store.dispatch({
        type: 'hastag/load',
        payload: hastags
    })
}

export function addHastag (tag: string): void {
    store.dispatch({
        type: 'hastag/add',
        payload: tag
    })
}

export function deleteHastag (tag: string): void {
    store.dispatch({
        type: 'hastag/delete',
        payload: tag
    })
}
