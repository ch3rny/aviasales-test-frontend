import React, { useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.css'
import { avaibleSorting, SortType } from 'utils/constants'
import { useDispatch, useSelector } from 'store'
import { setSorting } from 'store/actions/filter'

const cx = classNames.bind(styles)

export const SortingSwitcher = () => {
  const sortParameter = useSelector(state => state.filter.sorting)
  const dispatch = useDispatch()
  const handleClick = useCallback(
    (_sortParameter: SortType) => dispatch(setSorting(_sortParameter)),
    [dispatch]
  )

  return (
    <div className={styles.switcherContainer}>
      {avaibleSorting.map((item, index) => (
        <button
          key={index}
          className={cx({
            switchButton: true,
            first: index === 0,
            last: index === avaibleSorting.length - 1,
            active: item.type === sortParameter
          })}
          onClick={() => handleClick(item.type)}
        >
          {item.title}
        </button>
      ))}
    </div>
  )
}
