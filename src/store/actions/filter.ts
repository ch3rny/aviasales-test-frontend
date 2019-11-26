import { SET_FILTER, SET_SORTING } from "store/action-types/filter"
import { SortType } from "utils/constants"

export const setFilter = (payload: number[]) => ({
  type: SET_FILTER,
  payload
} as const)

export const setSorting = (payload: SortType) => ({
  type: SET_SORTING,
  payload
} as const)

export type FilterActions = ReturnType<typeof setFilter> | ReturnType<typeof setSorting>
