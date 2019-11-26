import { combineReducers } from 'redux'
import { ticketsReducer } from './tickets'
import { filtersReducer } from './filter'
import { RootStore } from 'store'

export const rootReducer = combineReducers<RootStore>({
  tickets: ticketsReducer,
  filter: filtersReducer
})
