import { useCallback, useEffect, useState } from "react";

const getCurrentTime = () =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "America/St_Johns",
  }).format(new Date());

const getCurrentDate = () =>
  new Intl.DateTimeFormat("en-US", {
    era: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/St_Johns",
  }).format(new Date());

export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());

  const update = useCallback(() => {
    setCurrentTime(getCurrentTime());
    setCurrentDate(getCurrentDate());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      update();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {currentDate}
      <br />
      {currentTime}
    </>
  );
}
