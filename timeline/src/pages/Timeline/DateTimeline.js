import React from 'react'
import { Header } from './Header/Header'
import { Calendar } from './Calendar/Calendar'
import { useTimelineContext } from './TimeLineContext'
import { DayTimeline } from './DayTimeline/DayTimeline'

export const DateTimeline = () => {
  const {dates, getMonthYear} = useTimelineContext();
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${dates.length}, 60px)`,
            gridTemplateRows: `repeat(${20}, 60px)`,
            width: "100%",
            overflowX: "scroll",
            whiteSpace: "nowrap"
        }}>
            <Header/>
            <DayTimeline />
            <Calendar />
        </div>
  )
}
