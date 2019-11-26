import { createStore, applyMiddleware } from 'redux'
import { useSelector as _useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'
import { FilterStore } from './reducers/filter'
import { TicketsStore } from './reducers/tickets'

export interface RootStore {
  filter: FilterStore
  tickets: TicketsStore
}

export const store = createStore(rootReducer, applyMiddleware(thunk))

const useSelector: TypedUseSelectorHook<RootStore> = _useSelector

export { useSelector, useDispatch }