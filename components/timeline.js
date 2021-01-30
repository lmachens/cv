import { Chrono } from "react-chrono";
import styles from "../styles/Timeline.module.css";

const items = [
  {
    title: "2019 - present",
    cardTitle: "Head Web Developer Coach",
    cardSubtitle: (
      <a href="https://neuefische.de" target="_blank">
        neue fische GmbH
      </a>
    ),
    cardDetailedText: (
      <>
        My job is to teach and coach Web Developers in a three months bootcamp
        and I love it ❤. Besides the coaching, I am developing job teaching
        apps, extend the curriculum and speak with applicants.{" "}
        <a
          href="https://www.neuefische.de/magazin/javascript-lernen-im-team-statt-allein"
          target="_blank"
        >
          This article
        </a>{" "}
        describes my motivations.
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
        I worked as a lead developer on several projects for Oerlikon, DEVK and
        Klugo. I introduced and coordinated internal code reviews, added tests
        based on Jest and Storybook and set up automatic deployments with
        GitLab-CI. Most projects were based on Node.JS, Webpack, Express, React,
        Next.js and Material-UI.
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
        This is my biggest achievment, an achievments app for League of Legends
        which is based on MongoDB, Next.js and React. Trophy Hunter is the
        winning app of the{" "}
        <a
          href="http://www.overwolf.com/contests/lol-challenge-2016/"
          target="_blank"
        >
          Overwolf Apps Developer Challenge 2016
        </a>
        . I am working with people from all over the world which helps to
        improve my social and technical skills.
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
        modules and infrastructure. The stack is Meteor.JS, React, Redux,
        MongoDB, Azure and Docker. I worked 100% remote in a team with 4 other
        developers where the whole communication was in English.
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
        Homelike is a platform for furnished apartments. I worked with MongoDB,
        Meteor.JS, Blaze and React. My biggest project was to create a map based
        search algorithm.
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
        autonomous and smart sun lounger called Smartlounger. We founded a
        company in 2015, but I left a few months after. The app was developed by
        me in Apache Cordova, JS and HTML5 canvas.
      </>
    ),
  },
  {
    title: "2015",
    cardTitle: "Trainer",
    cardSubtitle: "IHK Osnabrück",
    cardDetailedText: (
      <>
        My passion to share my knowledge started early. A good start was to get
        the license to educate trainees.
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
        to migrate from PHP 5.3 to 5.4. Other technologies are MySQL and jQuery.
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
        As a master's degree candidate, I was working with C# and XAML and
        developed a Windows Store App (Windows 8.1) which allows mobile access
        to ELO documentation management servers.
      </>
    ),
  },
  {
    title: "2012 - 2014",
    cardTitle: "Master of Science in Informatics",
    cardSubtitle: "Hochschule Osnabrück",
    cardDetailedText: (
      <>
        My master thesis (mark: 1.15) was about document management on tablets.
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
        During my studies, I started working at BES GmbH as a developer. BESgrav
        is a CAD software for engraving and cutting. I had to work with Win32
        interfaces, Visual Studio, C and C++. I focused on image processing.
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
        for local subway schedules. The app was developed in Java.
      </>
    ),
  },
  {
    title: "2008 - 2012",
    cardTitle: "Bachelor of Science in Technical Informatics",
    cardSubtitle: "Hochschule Osnabrück",
    cardDetailedText: (
      <>
        I wrote my bachelor thesis (mark: 1.7) about visual marker detection. I
        spent one semester in Japan and researched on a system for virtual music
        instruments (augmented reality).
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
        experience to write about playing games on an Atary ST 🕹.
      </>
    ),
  },
];

function Timeline() {
  return (
    <section className={styles.chrono}>
      <Chrono
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
    </section>
  );
}

export default Timeline;
