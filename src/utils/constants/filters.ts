export type FilterValue = number | 'all'

interface Filter {
  title: string
  value: number
}

export const avaibleFilters: Filter[] = [
  {
    title: 'Без пересадок',
    value: 0
  },
  {
    title: '1 пересадка',
    value: 1
  },
  {
    title: '2 пересадки',
    value: 2
  },
  {
    title: '3 пересадки',
    value: 3
  }
]
