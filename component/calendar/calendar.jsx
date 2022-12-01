
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

import React from 'react'

const CalendarB = () => {
    const handleSelect=(date)=>{
        console.log(date); // native Date object
      }
    return (
        <Calendar
          date={new Date()}
          onChange={handleSelect}
            color="#515255"
        />
      )
  
}

export default CalendarB