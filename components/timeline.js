import Chrono from "./chrono";
import styles from "../styles/Timeline.module.css";
import { useEffect, useState } from "react";

const items = [
  {
    range: "2019 - present",
    title: "Head Coach Web Development",
    subtitle: (
      <a href="https://neuefische.de" target="_blank" rel="noreferrer">
        neue fische GmbH
      </a>
    ),
    text: (
      <>
        My current job (which I love ❤) is to teach and coach Web Developers in
        a three months bootcamp. Besides the coaching, I am creating job
        teaching apps, extending the curriculum and speaking with applicants.{" "}
        <a
          href="https://www.neuefische.de/magazin/javascript-lernen-im-team-statt-allein"
          target="_blank"
          rel="noreferrer"
        >
          This article
        </a>{" "}
        provides more information.
      </>
    ),
  },
  {
    range: "2018 - 2019",
    title: "Lead Developer",
    subtitle: (
      <a href="https://grapes.de/" target="_blank" rel="noreferrer">
        GRAPES Webagency
      </a>
    ),
    text: (
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
    range: "2017 - present",
    title: "Founder",
    subtitle: (
      <a href="https://th.gl" target="_blank" rel="noreferrer">
        Trophy Hunter
      </a>
    ),
    text: (
      <>
        This is my biggest project, an app for League of Legends based on
        MongoDB, Next.js and React. With Trophy Hunter, I won the{" "}
        <a
          href="http://www.overwolf.com/contests/lol-challenge-2016/"
          target="_blank"
          rel="noreferrer"
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
    range: "2016 - 2018",
    title: "Full Stack Developer",
    subtitle: (
      <a href="https://mobilehead.com/" target="_blank" rel="noreferrer">
        Mobilehead
      </a>
    ),
    text: (
      <>
        As the first hired developer, I was responsible for most of the core
        modules and infrastructure. In addition to the web technologies like
        React and MongoDB, I was responsible for Docker based load balancer,
        MongoDB replication sets and zero downtime. We moved from Azure to self
        hosted solutions. I really enjoyed working remotely with an
        international developer team.
      </>
    ),
  },
  {
    range: "2015 - 2016",
    title: "Full Stack Developer",
    subtitle: (
      <a href="https://thehomelike.com" target="_blank" rel="noreferrer">
        Homelike
      </a>
    ),
    text: (
      <>
        Homelike is a platform for furnished apartments, similar to Airbnb. I
        learned a lot about fast growing startups, funding and economic driven
        decisions. It was a great time, especially to improve my MongoDB,
        Meteor.js and React skills. The most challenging task was to create a
        location/map based search algorithm.
      </>
    ),
  },
  {
    range: "2015",
    title: "Co-Founder",
    subtitle: (
      <a href="https://tronos.de/" target="_blank" rel="noreferrer">
        Tronos
      </a>
    ),
    text: (
      <>
        In 2014 I was working on a mobile app to control a prototype of an
        autonomous and smart sun lounger called Smartlounger. We founded Tronos
        in 2015, but I left a few months later due to disagreements.{" "}
        <a
          href="/tronos.jpg"
          alt="Tronos presentation"
          target="_blank"
          rel="noreferrer"
        >
          Click here
        </a>{" "}
        for a photo 🤓.
      </>
    ),
  },
  {
    range: "2014 - 2015",
    title: "PHP Developer",
    subtitle: (
      <a
        href="https://www.mps-solutions.de/produkt/mpscitywerk/"
        target="_blank"
        rel="noreferrer"
      >
        Citywerk
      </a>
    ),
    text: (
      <>
        After my studies, I started working as a PHP Developer. One big task was
        to migrate from PHP 5.3 to 5.4. If you know Register Globals in PHP, you
        know the pain 😭. But I learned a lot about MySQL and jQuery.
      </>
    ),
  },
  {
    range: "2013",
    title: "C# Developer",
    subtitle: (
      <a href="http://www.sievers-group.com/" target="_blank" rel="noreferrer">
        Sievers SNC
      </a>
    ),
    text: (
      <>
        As a master's degree candidate, I was working with C# and XAML to
        develop a Windows Store App (Windows 8.1). What is a Windows Store App
        you might ask? Luckily you don't need to know anymore 😵.
      </>
    ),
  },

  {
    range: "2011 - 2013",
    title: "C/C++ Developer",
    subtitle: (
      <a href="https://besgrav.de/" target="_blank" rel="noreferrer">
        BES GmbH
      </a>
    ),
    text: (
      <>
        During my studies, I started working for a small company as developer.
        BESgrav is a CAD software for engraving and cutting, but the code base
        was outdated. I worked with Win32 interfaces, Visual Studio, C and C++.
        The image processing part was very interesting and I am extremely happy
        about the learned knowledge.
      </>
    ),
  },
  {
    range: "2010",
    title: "Android Developer",
    subtitle: "Japan Communication",
    text: (
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
    range: "2015",
    title: "Trainer",
    subtitle: "IHK Osnabrück",
    text: (
      <>
        I always had the motivation to keep learning and share my knowledge with
        others. After work, I learned for IHK license (Ausbilderschein) to
        educate trainees.
      </>
    ),
  },
  {
    range: "2012 - 2014",
    title: "Master of Science in Informatics",
    subtitle: "Hochschule Osnabrück",
    text: (
      <>
        My master thesis (mark: 1.15) explains the development of an document
        management app based on ELO (Elektronischer Leitz Ordner) for tablet
        PCs. The studies were time consuming, but there was always time to enjoy
        the beer side of life 🍻.
      </>
    ),
  },
  {
    range: "2008 - 2012",
    title: "Bachelor of Science in Technical Informatics",
    subtitle: "Hochschule Osnabrück",
    text: (
      <>
        I wrote my bachelor thesis (mark: 1.7) about visual marker detection and
        spent one semester in Japan. This time was very impressive and gives me
        tons of great memories. In my final project, I created a virtual guitar
        which was playable by visual markers (augmented reality).
      </>
    ),
  },
  {
    range: "2005 - 2007",
    title: "Vocational education",
    subtitle: "BBS Ammerland",
    text: (
      <>
        2005 was the beginning of my computer science career by having
        successfully completed an education called "Technical Assistant for
        computer science". My interests in computers started long before that
        date, but I think it doesn't count as experience to write about playing
        games on an Atari ST 🕹️.
      </>
    ),
  },
];

const mediaQuery =
  typeof window !== "undefined"
    ? window.matchMedia("(min-width: 800px)")
    : { matches: false };
function Timeline() {
  const [mode, setMode] = useState(
    mediaQuery.matches ? "VERTICAL_ALTERNATING" : "VERTICAL"
  );

  useEffect(() => {
    function handleMediaChange(event) {
      if (event.matches) {
        setMode("VERTICAL_ALTERNATING");
      } else {
        setMode("VERTICAL");
      }
    }

    mediaQuery.addListener(handleMediaChange);
    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  return (
    <section className={styles.chrono}>
      <h2>Work experience</h2>
      <Chrono items={items} />
      <h2>Education</h2>
      <Chrono items={educations} />
    </section>
  );
}

export default Timeline;
