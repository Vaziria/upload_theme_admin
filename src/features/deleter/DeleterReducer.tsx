import { IConfigDelete, IDeleteQuery } from "../../api/tool"
import { CategIds } from "../../model/shopee/category"



interface IState {
  delquery: IDeleteQuery
  delfilter: IConfigDelete
}

interface IQueryAction {
  type: 'deleter/query',
  payload: Partial<IDeleteQuery>
}

interface IDelConfigAction {
  type: 'deleter/filter',
  payload: Partial<IConfigDelete>
}

interface ICategAddAction {
  type: 'deleter/category/add'
  payload: CategIds
}

interface ICategRmAction {
  type: 'deleter/category/remove',
  payload: number
}

interface ICategUpdateAction {
  type: 'deleter/category/up',
  payload: {
    index: number,
    data: CategIds
  }
}

type IAction = IQueryAction | IDelConfigAction | ICategAddAction | ICategRmAction | ICategUpdateAction

const defstate: IState = {
  delquery: {
    sold: 0,
    view: 0,
    delete: 100,
    blokir: true,
    diarsipkan: false,
    diperiksa: true,
    
    tanggal: '',
    awaltanggal: ''
  },
  delfilter: {
    fil_category: false,
    fil_harga: false,
    fil_keyword: false,
    category: [],
    harga: {
      min: 0,
      max: 0
    },
    keyword: ''
  }
}

export default function DeleterReducer(state: IState = defstate, action: IAction): IState {
  switch(action.type) {
    case 'deleter/filter': {
      const delfilter = state.delfilter
      return { ...state, delfilter: {...delfilter, ...action.payload}}
    }
      

    case 'deleter/query': {
      const delquery = state.delquery
      return { ...state, delquery: {...delquery, ...action.payload}}
    }

    case 'deleter/category/add': {
      const category: CategIds[] = [...state.delfilter.category, action.payload] 
      return { ...state, delfilter: {...state.delfilter, category}}
    }

    case 'deleter/category/remove': {
      const category: CategIds[] = state.delfilter.category.filter((categ, index) => {
        if(index === action.payload){
          return false
        }
        return true
      })
      return { ...state, delfilter: {...state.delfilter, category}}
    }

    case 'deleter/category/up': {
      const category: CategIds[] = state.delfilter.category.map((categ, index) => {
        if(index === action.payload.index){
          return action.payload.data
        }
        return categ
      })
      return { ...state, delfilter: {...state.delfilter, category}}
    }
      

    default:
      return state
  }
}