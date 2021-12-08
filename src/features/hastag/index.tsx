import { store } from '..'
import client from '../../api/client'

export async function loadHastags (): Promise<void> {
    const hastags = await client.get('/api/hastag?list=1')

    store.dispatch({
        type: 'hastag/load',
        payload: hastags.data
    })
}
