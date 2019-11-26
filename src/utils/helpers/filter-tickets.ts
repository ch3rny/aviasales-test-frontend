import { Ticket } from "models"
import { SortType } from "utils/constants"

type SortCbFn = (a: Ticket, b: Ticket) => number

const sortCb = (sorting: SortType): SortCbFn => sorting === SortType.Cheapest
  ? (a, b) => a.price - b.price
  : (a, b) => {
    return (
      a.segments.reduce((total, item) => total + item.duration, 0) -
      b.segments.reduce((total, item) => total + item.duration, 0)
    )
  }

export const filterTickets = (stops: number[], sorting: SortType, tickets: Ticket[]) => {
  const filteredTickets = tickets.filter(ticket => {
    const [firstSegment, secondSegment] = ticket.segments
    return stops.includes(firstSegment.stops.length) && stops.includes(secondSegment.stops.length)
  })

  return filteredTickets.sort(sortCb(sorting)).slice(0, 5)
}
