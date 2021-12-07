
interface IState {
    markups: string[]
}

interface LoadAction {
    type: 'markup/load'
    payload: string[]
}

interface AddAction {
    type: 'markup/add'
    payload: string
}

interface DeleteAction {
    type: 'markup/delete'
    payload: string
}

type IAction = LoadAction | AddAction | DeleteAction

const defstate = {
    markups: []
}

export default function MarkupReducer(state: IState = defstate, action: IAction): IState {
    switch (action.type) {
        case 'markup/load':
            return { markups: action.payload }

        case 'markup/add':
            return { markups: [...state.markups, action.payload] }

        case 'markup/delete':
            return { markups: state.markups.filter(m => m !== action.payload) }
        
        default:
            return state
    }

}