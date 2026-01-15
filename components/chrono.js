import styles from "../styles/Chrono.module.css";

function Chrono({ items }) {
  return (
    <div className={styles.chrono}>
      {items.map((item, index) => (
        <div key={`${item.range}-${index}`} className={styles.chrono__item}>
          <div className={styles.chrono__range}>{item.range}</div>
          <div className={styles.chrono__line} />
          <article className={styles.chrono__card} data-range={item.range}>
            <header>
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
            </header>
            <main>{item.text}</main>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Chrono;
