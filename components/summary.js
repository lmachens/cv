import { useEffect, useState } from "react";
import useWritingState from "../hooks/useWritingState";
import styles from "../styles/Summary.module.css";
import classNames from "classnames";

const tabs = [
  {
    title: "Enthusiast",
    content: () => (
      <p>
        With more than 10 years of experience and hundreds of projects, my will
        to try out new things is stronger than ever. I like to share my
        knowledge with like-minded spirits and challenge myself with new trends
        and technologies.
      </p>
    ),
  },
  {
    title: "Freelancer",
    content: () => (
      <p>
        Besides my regular jobs, I love to work on private and freelancer
        projects. I started freelancing in 2011 and have improved my technical
        and social skills since.
      </p>
    ),
  },
];
function Summary({ className }) {
  const [tabIndex, setTabIndex] = useState(0);
  const tab = tabs[tabIndex];

  const [title, setTitle] = useWritingState(tab.title);
  const [content, setContent] = useState("");

  const fullTitleVisible = title === tab.title;

  useEffect(() => {
    if (!fullTitleVisible) {
      setContent("");
    } else {
      setContent(tab.content);
    }
  }, [fullTitleVisible]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newTabIndex = (tabIndex + 1) % tabs.length;
      const tab = tabs[newTabIndex];
      setTabIndex(newTabIndex);
      setTitle(tab.title);
    }, 15000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [tabIndex]);

  return (
    <section className={classNames(styles.container, className)}>
      <h2 className={styles.title}>{title}</h2>
      <nav className={styles.nav}>
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            tabIndex={0}
            className={classNames(styles.navButton, {
              [styles.active]: tabIndex === index,
            })}
            aria-label={tab.title}
            onClick={() => {
              setTabIndex(index);
              setTitle(tabs[index].title);
            }}
          />
        ))}
      </nav>
      <div
        className={styles.content}
        style={{ opacity: Number(fullTitleVisible) }}
      >
        {content}
      </div>
    </section>
  );
}

export default Summary;
