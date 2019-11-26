
import { Ticket } from 'models'
import { START_FETCHING, SUCCESS_FETCHING, FAIL_FETCHING, SAVE_TICKETS } from 'store/action-types/ticket'
import { TicketsActions } from 'store/actions/tickets'

export interface TicketsStore {
  items: Ticket[]
  isLoading: boolean
  error?: boolean
}

const initialState: TicketsStore = {
  items: [],
  isLoading: false
}

export const ticketsReducer = (state = initialState, action: TicketsActions): TicketsStore => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_FETCHING:
      return {
        ...state,
        isLoading: false
      }
    case FAIL_FETCHING:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    case SAVE_TICKETS:
      return {
        ...state,
        items: [...state.items, ...action.payload]
      }
    default:
      return state
  }
}