import React, { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const DataPickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      filterTime={filterPassedTime}
      locale={ko}
      showTimeSelect
      timeFormat="p"
      timeIntervals={10}
      dateFormat="yyyy년 MM월 dd일 HH시 mm분"
      calendarContainer={MyContainer}
    />
  );
};

export default DataPickers;

// datepicker 현재시간 이전 시간 제한하기
const filterPassedTime = (time) => {
  const currentDate = new Date();
  const selectedDate = new Date(time);

  return currentDate.getTime() < selectedDate.getTime();
};
