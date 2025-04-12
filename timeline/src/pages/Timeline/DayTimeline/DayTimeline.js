import { useTimelineContext } from "../TimeLineContext";

export const DayTimeline = () => {
    const {dates, getMonthYear} = useTimelineContext();
    console.log('teeest', dates)
    return dates.map(date => {
        return  <div key={date.dateId} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            borderBottom: "1px solid rgb(72, 83, 88)"
        }}>
            <span>{date.day}</span>
            <span>{date.weekDay[0]}</span>
        </div>
    })
    
}
