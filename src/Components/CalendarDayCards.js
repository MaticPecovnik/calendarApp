import React from "react";
import "./CalendarDayCards.css";
import Day from "../Components/Day";

import getFirstLastDay from "../HelperFunctions/getFirstLastDay";
import getNumberOfWeeks from "../HelperFunctions/getNumberOfWeeks";

const CalendarDayCards = ({ currentMonth, currentYear, events }) => {
  const [firstDay, lastDay] = getFirstLastDay(currentMonth, currentYear);
  const numOfWeeks = getNumberOfWeeks(currentMonth, currentYear);
  const currentWeek = 0;

  if (numOfWeeks === 5) {
    return (
      <div className="calendar_daycards__container">
        {Array.from(Array(numOfWeeks).keys()).map(i => {
          if (i === 0) {
            return (
              <div className={`week${i + 1} week`} key={i}>
                {Array.from(Array(firstDay - 1).keys()).map(i => {
                  return <Day key={i} events={events} decorator={0} date={i} />;
                })}
                {Array.from(Array(7 - firstDay + 1).keys()).map(i => {
                  return <Day key={i} events={events} decorator={1} date={i} />;
                })}
              </div>
            );
          } else if (i === numOfWeeks - 1) {
            return (
              <div className={`week${i + 1} week`} key={i}>
                {Array.from(Array(lastDay === 0 ? 7 : lastDay).keys()).map(
                  i => {
                    return (
                      <Day key={i} events={events} decorator={1} date={i} />
                    );
                  }
                )}

                {Array.from(Array(lastDay === 0 ? 0 : 7 - lastDay).keys()).map(
                  i => {
                    return (
                      <Day key={i} events={events} decorator={0} date={i} />
                    );
                  }
                )}
              </div>
            );
          } else {
            return (
              <div className={`week${i + 1} week`} key={i}>
                {Array.from(Array(7).keys()).map(i => {
                  return <Day key={i} events={events} decorator={1} date={i} />;
                })}
              </div>
            );
          }
        })}
        <div className={`week6 week`}>
          {Array.from(Array(7).keys()).map(i => {
            return <Day key={i} events={events} decorator={0} date={i} />;
          })}
        </div>
      </div>
    );
  } else if (numOfWeeks === 6) {
    return (
      <div className="calendar_daycards__container">
        {Array.from(Array(numOfWeeks).keys()).map(i => {
          if (i === 0) {
            return (
              <div className={`week${i + 1} week`} key={i}>
                {Array.from(
                  Array(firstDay === 0 ? 6 : firstDay - 1).keys()
                ).map(i => {
                  return <Day key={i} events={events} decorator={0} date={i} />;
                })}
                {Array.from(
                  Array(firstDay === 0 ? 1 : 7 - firstDay + 1).keys()
                ).map(i => {
                  return <Day key={i} events={events} decorator={1} date={i} />;
                })}
              </div>
            );
          } else if (i === numOfWeeks - 1) {
            return (
              <div className={`week${i + 1} week`} key={i}>
                {Array.from(Array(lastDay).keys()).map(i => {
                  return <Day key={i} events={events} decorator={1} date={i} />;
                })}

                {Array.from(Array(7 - lastDay).keys()).map(i => {
                  return <Day key={i} events={events} decorator={0} date={i} />;
                })}
              </div>
            );
          } else {
            return (
              <div className={`week${i + 1} week`} key={i}>
                {Array.from(Array(7).keys()).map(i => {
                  return <Day key={i} events={events} decorator={1} date={i} />;
                })}
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default CalendarDayCards;
