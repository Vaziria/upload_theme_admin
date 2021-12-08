import { Spin, SpinConfig } from "../../model/Spin"

interface IState {
    spin: Spin[]
    config: SpinConfig
}

interface LoadAction {
    type: 'spin/load'
    payload: {
        spin: Spin[]
        config: SpinConfig
    }
}

interface AddAction {
    type: 'spin/add'
    payload: Spin
}

interface UpdateConfigAction {
    type: 'spin/config_update'
    payload: Partial<SpinConfig>
}

interface DeleteAction {
    type: 'spin/delete'
    payload: Spin
}

type IAction = LoadAction | AddAction | UpdateConfigAction | DeleteAction

const defstate: IState = {
    spin: [],
    config: {
        merek_ins_t: false,
        title: '',
        desc: ''
    }
}

export default function SpinReducer(state: IState = defstate, action: IAction): IState {
    switch (action.type) {
        case 'spin/load':
            state.spin = action.payload.spin
            state.config = action.payload.config
            return state

        case 'spin/add':
            state.spin = [...state.spin, action.payload]
            return { ...state }

        case 'spin/config_update':
            state.config = {
                ...state.config,
                ...action.payload
            }

            return { ...state }

        case 'spin/delete':
            state.spin = state.spin.filter(
                spin => spin.name !== action.payload.name
            )
            return { ...state }
        
        default:
            return state
    }

}
