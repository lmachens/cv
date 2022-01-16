import Chrono from "./chrono";
import styles from "../styles/Timeline.module.css";
import { experience, educations } from "./data";

function Timeline() {
  return (
    <section className={styles.chrono}>
      <h2>Work experience</h2>
      <Chrono items={experience} />
      <h2>Education</h2>
      <Chrono items={educations} />
    </section>
  );
}

export default Timeline;
