import React, { useEffect, useMemo } from 'react'
import { filterTickets } from 'utils/helpers'
import { TicketItem } from 'components/ticket-item'
import { useSelector, useDispatch } from 'store'
import { startSearch } from 'store/actions/tickets'

export const TicketContainer = () => {
  const stops = useSelector(state => state.filter.stops)
  const sorting = useSelector(state => state.filter.sorting)
  const tickets = useSelector(state => state.tickets.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startSearch())
  }, [dispatch])

  const filteredTickets = useMemo(
    () => filterTickets(stops, sorting, tickets),
    [stops, sorting, tickets]
  )

  return (
    <>
      {filteredTickets.map((ticket, index) => (
        <TicketItem key={index} ticket={ticket} />
      ))}
    </>
  )
}
