import Badge from "../components/badge";
import styles from "../styles/Aside.module.css";

function Aside() {
  return (
    <aside className={styles.aside}>
      <header>
        <div className={styles.border}>
          <img className={styles.avatar} src="/me.jpg" alt="" />
        </div>
        <h3>Leon Machens</h3>
        <p>
          Full Stack Developer
          <br />
          Coach/Trainer
        </p>
      </header>
      <main>
        <ul className={styles.spaceBetween}>
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
              <a
                href="mailto:leon@machens.koeln"
                target="_blank"
                rel="noreferrer"
              >
                leon@machens.koeln
              </a>
            </span>
          </li>
          <li>
            <h4>Phone</h4>
            <span>
              <a href="tel:+4917664777468" target="_blank" rel="noreferrer">
                +49 176 64777 468
              </a>
            </span>
          </li>
        </ul>
        <div className={styles.divider} />
        <section className={styles.social}>
          <a
            href="https://github.com/lmachens"
            target="_blank"
            rel="noreferrer"
          >
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
            rel="noreferrer"
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
            <li>
              <a
                href="https://github.com/lmachens/cv"
                target="_blank"
                rel="noreferrer"
              >
                ❤️ Open Source
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Private</h3>
          <ul>
            <li>
              <a
                href="https://youtu.be/uVjggcmqMxw?t=1378"
                target="_blank"
                rel="noreferrer"
              >
                🏆 Vice champion in CNC3
              </a>
            </li>
            <li>🧖‍♂️ Sauna master certificate</li>
            <li>🏍️ Sold my GSXR 750 in 2020</li>
            <li>💪 Love workouts</li>
            <li>💍 Married since 2018</li>
          </ul>
        </section>
      </main>
    </aside>
  );
}

export default Aside;
