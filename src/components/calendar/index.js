import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function App(props) {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  props.func(moment(dateState).format("Y-MM-DD"));

  return (
    <>
      <Calendar value={dateState} onChange={changeDate} />
      <p>
        Current selected date is <b>{moment(dateState).format("Y-MM-DD")}</b>
      </p>
    </>
  );
}