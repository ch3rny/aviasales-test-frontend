import React, { useMemo, Fragment } from 'react'
import styles from './styles.module.css'
import { formatDuration, formatTime } from 'utils/helpers'
import { Segment, Ticket } from 'models'
import { avaiblePlurals } from 'utils/constants'

interface SegmentItemProps {
  segment: Segment
}

const SegmentItem = ({
  segment: { stops, date, duration, origin, destination }
}: SegmentItemProps) => {
  const stopsCount = useMemo(() => stops.length, [stops])
  const formattedDuration = useMemo(() => formatDuration(duration), [duration])
  const formattedTime = useMemo(() => formatTime(date, duration), [
    date,
    duration
  ])

  return (
    <div className={styles.segment}>
      <div className={styles.column}>
        <div className={styles.label}>
          {origin} - {destination}
        </div>
        <div>{formattedTime}</div>
      </div>
      <div className={styles.column}>
        <div className={styles.label}>В пути</div>
        <div>{formattedDuration}</div>
      </div>
      <div className={styles.column}>
        <div className={styles.label}>{avaiblePlurals[stopsCount]}</div>
        <div>
          {stops.map((stop, index) => (
            <Fragment key={index}>
              {index === stopsCount - 1 ? stop : `${stop}, `}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

interface TicketItemProps {
  ticket: Ticket
}

export const TicketItem = ({
  ticket: { price, carrier, segments }
}: TicketItemProps) => {
  return (
    <div className={styles.ticketContainer}>
      <div className={styles.mainInfo}>
        <span className={styles.price}>{price} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      {segments.map((segment, index) => (
        <SegmentItem key={index} segment={segment} />
      ))}
    </div>
  )
}
