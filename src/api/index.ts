import api from './axios'
import { Ticket } from 'models'

export const getSearchId = () => {
  return api.get<{ searchId: string }>('search')
}

export const getTickets = (searchId: string) => {
  return api.get<{ tickets: Ticket[]; stop: boolean }>('tickets', { params: { searchId } })
}
