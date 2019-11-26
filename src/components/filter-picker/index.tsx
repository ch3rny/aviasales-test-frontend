import React, { useCallback } from 'react'
import styles from './styles.module.css'
import { avaibleFilters, FilterValue } from 'utils/constants'
import { createFilter } from 'utils/helpers'
import { useSelector, useDispatch } from 'store'
import { setFilter } from 'store/actions/filter'

export const FilterPicker = () => {
  const stops = useSelector(state => state.filter.stops)
  const dispatch = useDispatch()
  const handleChange = useCallback(
    (filterValue: FilterValue) =>
      dispatch(setFilter(createFilter(stops, filterValue))),
    [dispatch, stops]
  )

  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <label htmlFor={'all'} className={styles.checkboxLabel}>
        <input
          id="all"
          type="checkbox"
          value={'all'}
          onChange={() => handleChange('all')}
          checked={stops.length === avaibleFilters.length}
        />
        Все
      </label>
      {avaibleFilters.map((item, index) => (
        <label
          key={index}
          htmlFor={item.title}
          className={styles.checkboxLabel}
        >
          <input
            id={item.title}
            type="checkbox"
            value={item.value}
            onChange={() => handleChange(item.value)}
            checked={stops.includes(item.value)}
          />
          {item.title}
        </label>
      ))}
    </div>
  )
}
