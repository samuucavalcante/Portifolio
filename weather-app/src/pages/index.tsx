import Time from "../components/Time";
import TimeInfo from "../components/TimeInfo";

export default function Home() {
  return (
    <div className="container">
      <Time className="time" />
      <TimeInfo className="time-info"  />
    </div>
  );
}
