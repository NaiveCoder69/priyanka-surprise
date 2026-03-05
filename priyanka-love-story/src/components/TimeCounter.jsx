import { useEffect, useState } from "react";

function TimeCounter() {

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const startDate = new Date("February 24, 2026 00:00:00");

    const interval = setInterval(() => {

      const now = new Date();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );
      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTime({
        days,
        hours,
        minutes,
        seconds
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="counter-section">

      <h2 className="counter-title">
        Our Beginning ❤️
      </h2>

      <p className="timer-story">

        It started with a message.

        <br /><br />

        On February 15,
        I finally told you how I felt.

        <br /><br />

        Nine days later,
        on February 24,
        you said YES.

        <br /><br />

        And since that moment,
        my world has felt a little brighter.

      </p>

      <div className="timer-row">

        <div className="timer-block">
          <span className="timer-number">{time.days}</span>
          <span className="timer-label">Days</span>
        </div>

        <div className="timer-separator">:</div>

        <div className="timer-block">
          <span className="timer-number">{time.hours}</span>
          <span className="timer-label">Hours</span>
        </div>

        <div className="timer-separator">:</div>

        <div className="timer-block">
          <span className="timer-number">{time.minutes}</span>
          <span className="timer-label">Minutes</span>
        </div>

        <div className="timer-separator">:</div>

        <div className="timer-block">
          <span className="timer-number">{time.seconds}</span>
          <span className="timer-label">Seconds</span>
        </div>

      </div>

    </section>
  );
}

export default TimeCounter;