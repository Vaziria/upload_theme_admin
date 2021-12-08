import { ProductNamespace } from "../../model/product"


interface IState {
    namespaces: ProductNamespace[]
}

interface LoadAction {
    type: 'collection/load'
    payload: ProductNamespace[]
}

interface AddAction {
    type: 'collection/add'
    payload: ProductNamespace
}

interface DeleteAction {
    type: 'collection/delete'
    payload: ProductNamespace
}

type IAction = LoadAction | AddAction | DeleteAction

const defstate: IState = {
    namespaces: []
}

export default function CollectionReducer(state: IState = defstate, action: IAction): IState {
    switch (action.type) {
        case 'collection/load':
            state.namespaces = action.payload
            return state

        case 'collection/add':
            state.namespaces = [...state.namespaces, action.payload]
            return state

        case 'collection/delete':
            state.namespaces = state.namespaces.filter(
                namespace => namespace.name !== action.payload.name
            )
            return state
        
        default:
            return state
    }

}
