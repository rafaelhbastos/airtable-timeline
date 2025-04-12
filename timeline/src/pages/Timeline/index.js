import { DateTimeline } from "./DateTimeline";
import { TimelineContextProvider } from "./TimeLineContext";

export const Timeline = () => {
  return (
    <TimelineContextProvider>
        <DateTimeline />
    </TimelineContextProvider>
  )
}
