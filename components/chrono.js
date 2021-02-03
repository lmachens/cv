import styles from "../styles/Chrono.module.css";

function chrono({ items }) {
  return (
    <section className={styles.chrono}>
      {items.map((item) => (
        <div key={item.title} className={styles.chrono__item}>
          <div className={styles.chrono__range}>{item.range}</div>
          <div className={styles.chrono__line} />
          <article className={styles.chrono__card}>
            <header>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </header>
            <main>{item.text}</main>
          </article>
        </div>
      ))}
    </section>
  );
}

export default chrono;
