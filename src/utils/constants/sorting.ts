export enum SortType {
  Cheapest,
  Fastest
}

interface SortItem {
  title: string
  type: SortType
}

export const avaibleSorting: SortItem[] = [
  {
    title: 'Самый дешевый',
    type: SortType.Cheapest
  },
  {
    title: 'Самый быстрый',
    type: SortType.Fastest
  }
]
