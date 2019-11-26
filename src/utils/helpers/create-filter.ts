import { FilterValue } from "utils/constants"

const checkFilter = (filters: number[], filterValue: number) => {
  return !filters.includes(filterValue)
    ? [...filters, filterValue]
    : filters.filter(item => item !== filterValue)
}

const DEFAULT_FILTERS = [0, 1, 2, 3]

export const createFilter = (filters: number[], filterValue: FilterValue) => {
  if (filterValue === 'all')
    return DEFAULT_FILTERS

  if (DEFAULT_FILTERS.includes(filterValue))
    return checkFilter(filters, filterValue)

  return []
}
