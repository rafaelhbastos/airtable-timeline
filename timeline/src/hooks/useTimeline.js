import { useCallback, useEffect, useMemo, useState } from "react";

export const useTimeline = () => {
  const today = useMemo(() => new Date('2021-03-30'), []);
  const [dates, setDates] = useState([]);

  const getMonthYear = useCallback(() => {
    const monthYear = [];
    dates.forEach(date => {
      const monthYearString = `${date.month}-${date.year}`
      const isAdded = monthYear.findIndex(my => my === monthYearString);
      if (isAdded === -1) {
        monthYear.push(monthYearString)
      }
    })
    return monthYear
  }, [dates])

  useEffect((dateRef = today) => {
    const startDate = new Date(dateRef);
    startDate.setMonth(startDate.getMonth() - 3);

    const endDate = new Date(dateRef);
    endDate.setMonth(endDate.getMonth() + 3);

    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const day = currentDate.getDate();
      const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
      const year = currentDate.getFullYear();
      const dateId = `${year}-${month}-${day}`;
      const dateObj = {
        dateId,
        weekDay:currentDate.toLocaleDateString('en-US', { weekday: 'long' }),
        day,
        month,
        year,
      }
      setDates(dates => {
        const isAdded = dates.findIndex(d => d.dateId === dateId);
        if (isAdded === -1) {
          return [...dates, dateObj]
        }
        return dates
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

  }, [setDates]);

  return {
    dates,
    getMonthYear
  }
}
