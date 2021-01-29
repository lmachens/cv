import Head from "next/head";
import styles from "../styles/Home.module.css";
import Summary from "../components/summary";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leon Machens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Leon Machens</h1>
        <a href="https://github.com/lmachens" target="_blank">
          <img src="/github.png" alt="GitHub" />
        </a>
      </header>

      <main className={styles.container}>
        <Summary className={styles.content} />
        <img className={styles.avatar} src="/me.png" alt="" />
      </main>
    </>
  );
}
