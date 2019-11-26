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

export const fetchTickets = () => async (
  dispatch: ThunkDispatch<RootStore, undefined, AnyAction>
) => {
  dispatch(startFetching())

  try {
    const { data: { searchId } } = await getSearchId()
    const { data: { tickets } } = await getTickets(searchId)
    dispatch(saveTickets(tickets))
    dispatch(successFetching())
  } catch {
    dispatch(failFetching())
  }
}

export type TicketsActions =
  ReturnType<typeof startFetching> |
  ReturnType<typeof failFetching> |
  ReturnType<typeof successFetching> |
  ReturnType<typeof saveTickets>
