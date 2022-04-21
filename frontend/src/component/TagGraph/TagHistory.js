import React, { useState } from "react";
import moment from "moment";
import "../../../assets/css/TagHistory.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import HistoryGraph from "./HistoryGraph";
const TagHistory = () => {
  const [dates, setDatesState] = useState({
    startDate: "3/7/2022",
    endDate: "3/14/2022"
  });
  const [Check, setCheck] = useState(false);
  const setDates = (e, { startDate, endDate }) => {
    setDatesState({
      startDate: startDate.format("YYYY-MM-DD"),
      endDate: endDate.format("YYYY-MM-DD")
    });
    setCheck(true);
  };

  return (
    <div className="App">
      <h3>history볼 기간을 정해주세요</h3>
      <DateRangePicker
        onApply={setDates}
        ranges={{
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, "days"),
            moment().subtract(1, "days")
          ],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment()
              .subtract(1, "month")
              .startOf("month"),
            moment()
              .subtract(1, "month")
              .endOf("month")
          ],
          
        }}
        startDate={dates.startDate}
        endDate={dates.endDate}
      >
        <input
          type="text" 
          defaultValue={dates.startDate + "-" + dates.endDate}
          className="form-control"
        />
        
      </DateRangePicker>
      {Check ? <HistoryGraph dates={dates}/>:null}
    </div>
    
    
  )
}

export default TagHistory