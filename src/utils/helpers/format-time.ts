import format from 'date-fns/format'
import addMinutes from 'date-fns/addMinutes'
import parseISO from 'date-fns/parseISO'

export const formatTime = (date: string, duration: number) => {
  const start = parseISO(date)
  const end = addMinutes(start, duration)
  return `${format(start, 'HH:mm')} - ${format(end, 'HH:mm')}`
}
