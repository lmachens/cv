import Head from "next/head";
import styles from "../styles/Home.module.css";
import Summary from "../components/summary";
import Aside from "../components/aside";
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("../components/timeline"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Solo developer from Nottuln, Germany. I build The Hidden Gaming Lair — gaming companion tools used by thousands of players daily."
        />
        <meta name="keywords" content="Leon Machens, Developer, Coach, CV" />
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
