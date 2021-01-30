import Head from "next/head";
import styles from "../styles/Home.module.css";
import Summary from "../components/summary";
import Badge from "../components/badge";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leon Machens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}></header>
      <aside className={styles.aside}>
        <header>
          <div className={styles.border}>
            <img className={styles.avatar} src="/me.png" alt="" />
          </div>
          <h3>Leon Machens</h3>
          <p>
            Full Stack Developer
            <br />
            Coach/Trainer
          </p>
        </header>
        <main>
          <ul>
            <li>
              <h4>Location</h4>
              <span>Cologne, Germany</span>
            </li>
            <li>
              <h4>Year of birth</h4>
              <span>1989</span>
            </li>
            <li>
              <h4>E-Mail</h4>
              <span>
                <a href="mailto:leon@machens.koeln" target="_blank">
                  leon@machens.koeln
                </a>
              </span>
            </li>
            <li>
              <h4>Phone</h4>
              <span>
                <a href="tel:+4917664777468" target="_blank">
                  +49 176 64777 468
                </a>
              </span>
            </li>
          </ul>
          <div className={styles.divider} />
          <section className={styles.social}>
            <a href="https://github.com/lmachens" target="_blank">
              <img
                src="/github.svg"
                alt="GitHub"
                width="24"
                height="24"
                className={styles.flip}
              />
            </a>
            <a
              href="https://www.xing.com/profile/Leon_Machens/cv"
              target="_blank"
            >
              <img
                src="/xing.svg"
                alt="Xing"
                width="24"
                height="24"
                className={styles.flip}
              />
            </a>
          </section>
          <div className={styles.divider} />
          <section>
            <h3>Stack of choice</h3>
            <div className={styles.badges}>
              <Badge>React</Badge>
              <Badge>CSS</Badge>
              <Badge>TypeScript</Badge>
              <Badge>ES2021</Badge>
              <Badge>Docker</Badge>
              <Badge>VSCode</Badge>
            </div>
          </section>
          <div className={styles.divider} />
          <section>
            <h3>Highlights</h3>
            <ul>
              <li>👨‍🏫 Coached &gt;70 web developers</li>
              <li>🎮 Gaming app with &gt;1000 DAU</li>
              <li>👨‍💻 Never stopped learning</li>
              <li>🤖 +10 years of experience</li>
            </ul>
          </section>
        </main>
      </aside>
      <main className={styles.main}>
        <Summary />
      </main>
    </div>
  );
}
