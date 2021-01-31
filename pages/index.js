import Head from "next/head";
import styles from "../styles/Home.module.css";
import Summary from "../components/summary";
import Timeline from "../components/timeline";
import Aside from "../components/aside";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leon Machens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside />
      <main className={styles.main}>
        <Summary />
        <Timeline />
      </main>
    </div>
  );
}
