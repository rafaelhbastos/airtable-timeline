import {createContext, ReactNode, useContext} from "react";
import { useTimeline } from "../../hooks/useTimeline";

const TimelineContext = createContext();

export const TimelineContextProvider = ({children}) => {
    const {dates, getMonthYear} = useTimeline();
    return <TimelineContext.Provider value={{
        dates,
        getMonthYear
    }}>
        {children}
    </TimelineContext.Provider>
}

export const useTimelineContext = () => {
    const context = useContext(TimelineContext);

    if (!context) {
        throw new Error('This component is not in a TimelineContext Provider')
    }

    return context;
}