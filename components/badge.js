import styles from "../styles/Badge.module.css";

function Badge(props) {
  return <span className={styles.badge} {...props} />;
}

export default Badge;
