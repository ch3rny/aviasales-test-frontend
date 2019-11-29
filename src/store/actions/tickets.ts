import { RootStore } from 'store'
import { getSearchId, getTickets } from 'api'
import {
  FAIL_FETCHING,
  SAVE_TICKETS,
  START_FETCHING,
  SUCCESS_FETCHING
} from 'store/action-types/ticket'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Ticket } from 'models'

const startFetching = () => ({
  type: START_FETCHING
} as const)

const failFetching = () => ({
  type: FAIL_FETCHING
} as const)

const successFetching = () => ({
  type: SUCCESS_FETCHING
} as const)

const saveTickets = (payload: Ticket[]) => ({
  type: SAVE_TICKETS,
  payload
} as const)

export const startSearch = () => async (
  dispatch: ThunkDispatch<RootStore, undefined, AnyAction>
) => {
  dispatch(startFetching())
  try {
    const { data: { searchId } } = await getSearchId()
    dispatch(fetchTickets(searchId))
  } catch {
    dispatch(failFetching())
  }
}

export const fetchTickets = (searchId: string) => async (
  dispatch: ThunkDispatch<RootStore, undefined, AnyAction>
) => {
  try {
    const { data: { tickets, stop } } = await getTickets(searchId)
    dispatch(saveTickets(tickets))
    stop ? dispatch(successFetching()) : dispatch(fetchTickets(searchId))
  } catch {
    dispatch(failFetching())
    dispatch(fetchTickets(searchId))
  }
}

export type TicketsActions =
  ReturnType<typeof startFetching> |
  ReturnType<typeof failFetching> |
  ReturnType<typeof successFetching> |
  ReturnType<typeof saveTickets>
