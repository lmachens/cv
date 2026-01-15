import Chrono from "./chrono";
import styles from "../styles/Timeline.module.css";
import { experience, educations } from "./data";

function Timeline() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Work Experience</h2>
        </div>
        <Chrono items={experience} />
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Education</h2>
        </div>
        <Chrono items={educations} />
      </section>
    </>
  );
}

export default Timeline;
