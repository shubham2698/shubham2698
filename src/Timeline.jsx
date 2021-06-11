import TimelineData from "./TimelineData";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = () =>
    TimelineData.length > 0 && (
        <div className="timeline-container">
            {TimelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;