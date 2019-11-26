import { SortType } from 'utils/constants'
import { SET_FILTER, SET_SORTING } from 'store/action-types/filter'
import { FilterActions } from 'store/actions/filter'

export interface FilterStore {
  stops: number[]
  sorting: SortType
}

const initialState: FilterStore = {
  stops: [],
  sorting: SortType.Cheapest
}

export const filtersReducer = (state = initialState, action: FilterActions): FilterStore => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        stops: action.payload
      }
    case SET_SORTING:
      return {
        ...state,
        sorting: action.payload
      }
    default:
      return state
  }
}
