import { Chrono } from "react-chrono";
import styles from "../styles/Timeline.module.css";

const items = [
  {
    title: "2019 - present",
    cardTitle: "Head Coach Web Development",
    cardSubtitle: (
      <a href="https://neuefische.de" target="_blank">
        neue fische GmbH
      </a>
    ),
    cardDetailedText: (
      <>
        My current job (which I love ❤) is to teach and coach Web Developers in
        a three months bootcamp. Besides the coaching, I am creating job
        teaching apps, extending the curriculum and speaking with applicants.{" "}
        <a
          href="https://www.neuefische.de/magazin/javascript-lernen-im-team-statt-allein"
          target="_blank"
        >
          This article
        </a>{" "}
        provides more information.
      </>
    ),
  },
  {
    title: "2018 - 2019",
    cardTitle: "Lead Developer",
    cardSubtitle: (
      <a href="https://grapes.de/" target="_blank">
        GRAPES Webagency
      </a>
    ),
    cardDetailedText: (
      <>
        I worked as a Lead Developer on several projects for Oerlikon, DEVK and
        Klugo. Among other things, I introduced and coordinated internal code
        reviews, test driven development (JEST), Storybook and continuous
        delivery with GitLab-CI. Most projects were based on Node.js, Webpack,
        Express, React and Next.js.
      </>
    ),
  },
  {
    title: "2017 - present",
    cardTitle: "Founder",
    cardSubtitle: (
      <a href="https://th.gl" target="_blank">
        Trophy Hunter
      </a>
    ),
    cardDetailedText: (
      <>
        This is my biggest project, an app for League of Legends based on
        MongoDB, Next.js and React. With Trophy Hunter, I won the{" "}
        <a
          href="http://www.overwolf.com/contests/lol-challenge-2016/"
          target="_blank"
        >
          Overwolf Apps Developer Challenge 2016
        </a>
        . To improve the app, I am working with a company from Tel'Aviv. The
        collaboration allows me to get in touch with developers and people
        outside of Germany.
      </>
    ),
  },
  {
    title: "2016 - 2018",
    cardTitle: "Full Stack Developer",
    cardSubtitle: (
      <a href="https://mobilehead.com/" target="_blank">
        Mobilehead
      </a>
    ),
    cardDetailedText: (
      <>
        As the first hired developer, I was responsible for most of the core
        modules and infrastructure. In addition to the web technologies like
        React and MongoDB, I was responsible for Docker based load balancer,
        MongoDB replication sets and zero downtime. We moved from Azure to self
        hosted solutions. I really enjoyed working remote with an international
        developer team.
      </>
    ),
  },
  {
    title: "2015 - 2016",
    cardTitle: "Full Stack Developer",
    cardSubtitle: (
      <a href="https://thehomelike.com" target="_blank">
        Homelike
      </a>
    ),
    cardDetailedText: (
      <>
        Homelike is a platform for furnished apartments, simlar to Airbnb. I
        learned a lot about fast growing startups, fundings and economic driven
        decisions. It was a great time, especially to improve my MongoDB,
        Meteor.js and React skills. The most challenging task was to create a
        location/map based search algorithm.
      </>
    ),
  },
  {
    title: "2015",
    cardTitle: "Co-Founder",
    cardSubtitle: (
      <a href="https://tronos.de/" target="_blank">
        Tronos
      </a>
    ),
    cardDetailedText: (
      <>
        In 2014 I was working on a mobile app to control a prototype of an
        autonomous and smart sun lounger called Smartlounger. We founded Tronos
        in 2015, but I left a few months later due to disagreements.{" "}
        <a href="/tronos.jpg" target="_blank">
          Click here
        </a>{" "}
        for a photo 🤓.
      </>
    ),
  },
  {
    title: "2014 - 2015",
    cardTitle: "PHP Developer",
    cardSubtitle: (
      <a
        href="https://www.mps-solutions.de/produkt/mpscitywerk/"
        target="_blank"
      >
        Citywerk
      </a>
    ),
    cardDetailedText: (
      <>
        After my studies, I started working as a PHP Developer. One big task was
        to migrate from PHP 5.3 to 5.4. If you know Register Globals in PHP, you
        know the pain 😭. But I learned a lot about MySQL and jQuery.
      </>
    ),
  },
  {
    title: "2013",
    cardTitle: "C# Developer",
    cardSubtitle: (
      <a href="http://www.sievers-group.com/" target="_blank">
        Sievers SNC
      </a>
    ),
    cardDetailedText: (
      <>
        As a master's degree candidate, I was working with C# and XAML to
        develop a Windows Store App (Windows 8.1). What is a Windows Store App
        you might ask? Luckily you don't need to know anymore 😵.
      </>
    ),
  },

  {
    title: "2011 - 2013",
    cardTitle: "C/C++ Developer",
    cardSubtitle: (
      <a href="https://besgrav.de/" target="_blank">
        BES GmbH
      </a>
    ),
    cardDetailedText: (
      <>
        During my studies, I started working for a small company as developer.
        BESgrav is a CAD software for engraving and cutting, but the code base
        was outdated. I worked with Win32 interfaces, Visual Studio, C and C++.
        The image processing part was very intersting and I am extremly happy
        about the learned knowledge.
      </>
    ),
  },
  {
    title: "2010",
    cardTitle: "Android Developer",
    cardSubtitle: "Japan Communication",
    cardDetailedText: (
      <>
        I was working abroad in Tokyo for one month and developed an Android app
        for local subway schedules. This was my first project in Java, but more
        important was the experience to work for my sensei Mr. Yamamoto. Ask me
        about my 🐍 souvenir.
      </>
    ),
  },
];

const educations = [
  {
    title: "2015",
    cardTitle: "Trainer",
    cardSubtitle: "IHK Osnabrück",
    cardDetailedText: (
      <>
        I always had the motivation to keep learning and share my knowledge with
        others. After work, I learned for IHK license (Ausbilderschein) to
        educate trainees.
      </>
    ),
  },
  {
    title: "2012 - 2014",
    cardTitle: "Master of Science in Informatics",
    cardSubtitle: "Hochschule Osnabrück",
    cardDetailedText: (
      <>
        My master thesis (mark: 1.15) explains the development of an document
        management app based on ELO (Elektronischer Leitz Ordner) for tablet
        PCs. The studis were time consuming, but there was always time to enjoy
        the beer side of life 🍻.
      </>
    ),
  },
  {
    title: "2008 - 2012",
    cardTitle: "Bachelor of Science in Technical Informatics",
    cardSubtitle: "Hochschule Osnabrück",
    cardDetailedText: (
      <>
        I wrote my bachelor thesis (mark: 1.7) about visual marker detection and
        spent one semester in Japan. This time was very impressive and gives me
        tons of great memories. In my final project, I created a virtual guitar
        which was playable by visual markers (augmented reality).
      </>
    ),
  },
  {
    title: "2005 - 2007",
    cardTitle: "Vocational education",
    cardSubtitle: "BBS Ammerland",
    cardDetailedText: (
      <>
        2005 was the beginning of my informatics career by absolving an
        education called "Technical Assistant for Informatics". My interests in
        computers started long before that date, but I think it doesn't count as
        experience to write about playing games on an Atary ST 🕹️.
      </>
    ),
  },
];

function Timeline() {
  return (
    <section className={styles.chrono}>
      <h2>Work experience</h2>
      <Chrono
        allowDynamicUpdate
        scrollable={false}
        items={items}
        mode="VERTICAL_ALTERNATING"
        hideControls
        theme={{
          primary: "var(--accent-color)",
          secondary: "#1d252b",
          textColor: "var(--text-color)",
          cardBgColor: "#2a3740",
          cardForeColor: "var(--title-color)",
        }}
      />
      <h2>Education</h2>
      <Chrono
        allowDynamicUpdate
        scrollable={false}
        items={educations}
        mode="VERTICAL_ALTERNATING"
        hideControls
        theme={{
          primary: "var(--accent-color)",
          secondary: "#1d252b",
          textColor: "var(--text-color)",
          cardBgColor: "#2a3740",
          cardForeColor: "var(--title-color)",
        }}
      />
    </section>
  );
}

export default Timeline;
