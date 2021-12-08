import { store } from '..'
import { getNamespaces } from '../../api/product'

export async function loadCollection (): Promise<void> {
    const namespaces = await getNamespaces()

    store.dispatch({
        type: 'collection/load',
        payload: namespaces
    })
}
