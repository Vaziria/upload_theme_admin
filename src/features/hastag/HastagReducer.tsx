interface IState {
    hastags: string[]
}

interface LoadAction {
    type: 'hastag/load'
    payload: string[]
}

interface AddAction {
    type: 'hastag/add'
    payload: string
}

interface DeleteAction {
    type: 'hastag/delete'
    payload: string
}

type IAction = LoadAction | AddAction | DeleteAction

const defstate: IState = {
    hastags: []
}

export default function HastagReducer(state: IState = defstate, action: IAction): IState {
    switch (action.type) {
        case 'hastag/load':
            state.hastags = action.payload
            return { ...state }

        case 'hastag/add':
            state.hastags = [...state.hastags, action.payload]
            return { ...state }

        case 'hastag/delete':
            state.hastags = state.hastags.filter(
                hastag => hastag !== action.payload
            )
            return { ...state }
        
        default:
            return state
    }

}
