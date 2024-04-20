/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { DatePicker } from "antd";
import {
  formatDate,
  getNextPrevDate,
  getTodaysDate,
  parseDateString,
} from "../utils/dateHandlers";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { setDate } from "../redux/store";
import { motion } from "framer-motion";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dateDispatcher = useDispatch();
  const [dateValue, setDateValue] = useState<dayjs.Dayjs>(
    dayjs(getTodaysDate().replaceAll("-", "/"))
  );

  const onDateChangeHandler = (Date: dayjs.Dayjs) => {
    const dateString = formatDate(Date.toDate());
    dateDispatcher(setDate(dateString));
  };

  const onDateChangeViaButtons = (direction: "next" | "prev") => {
    setDateValue((prev) => {
      if (direction === "next") {
        const dateString = getNextPrevDate(prev.toDate(), "next");
        dateDispatcher(setDate(dateString));
        return dayjs(parseDateString(dateString));
      } else {
        const dateString = getNextPrevDate(prev.toDate(), "prev");
        dateDispatcher(setDate(dateString));
        return dayjs(parseDateString(dateString));
      }
    });
  };

  return (
    <div style={{ position: "relative", minHeight: window.innerHeight }}>
      <Header />
      <div
        style={{
          display: "flex",
          padding: 10,
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <motion.div
          onClick={() => {
            onDateChangeViaButtons("prev");
          }}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 2, cursor: "pointer" }}
          className="w3-button fa fa-caret-left"
          style={{ fontSize: 30, color: "white", marginRight: 30 }}
        />

        <DatePicker
          value={dateValue}
          allowClear={false}
          onChange={(e) => {
            onDateChangeHandler(e);
            setDateValue(e);
          }}
          defaultValue={dayjs(getTodaysDate().replaceAll("-", "/"))}
          picker="date"
        />
        {formatDate(dateValue.toDate()) !== getTodaysDate() &&
          parseDateString(formatDate(dateValue.toDate())) <
            parseDateString(getTodaysDate()) && (
            <motion.div
              onClick={() => {
                onDateChangeViaButtons("next");
              }}
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 2, cursor: "pointer" }}
              className="w3-button fa fa-caret-right"
              style={{ fontSize: 30, color: "white", marginLeft: 30 }}
            />
          )}
      </div>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
