import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Carve from "../Assets/Image/carve.png";
import Arcadia from "../Assets/Image/arcadia.png";
import GIGICoffee from "../Assets/Image/gigicoffee.png";
import Hivemind from "../Assets/Image/Hivemind.png";
import xcessCity from "../Assets/Image/xcessCity.png";
import ImagineHack from "../Assets/Image/ImagineHack.jpeg";
import KitaHack from "../Assets/Image/KitaHack.jpeg";
import SamsungFoldable from "../Assets/Image/SamsungFoldable.jpeg";
import GSC from "../Assets/Image/GSC.jpeg";
import TMHackathon from "../Assets/Image/TMHackathon.jpeg";
import UMSC from "../Assets/Image/UMSC.jpeg";
import "./ProjectTimeline.css";
function ProjectTimeline() {
  let timeline = [
    {
      id: 1,
      title: "Carve Part 1",
      occasion: "Kitahack 2023",
      prize: "First Runner-Up",
      image: KitaHack,
      description: (
        <p>
          Kitahack 2023 is a nationwide hackathon in Malaysia organized by
          Google Developer Student Club in Malaysia. In this hackathon, twe are
          challenged to build a solution to support one or more than one of the
          UN sustainable development goals. In this prestigious hackathon, my
          team and I won first runner-up.
          <p />
          In the process, we developed a first-of-its-kind inclusive parenting
          mobile application, named Carve, utilizing Flutter and other APIs for
          the front end and Firebase Authentication and Firestore for the back
          end.
          <p />
          Our mobile application, Carve delivers personalized essential
          parenting tips for busy parents in as little as 10 minutes and caters
          to all types of parents, including underprivileged and often
          overlooked parents while connecting them locally and globally to
          accommodate diverse cultural values.
          <p />
          Furthermore, to validate the porential impact of our application, we
          gathered feedback and validations from 20 users to improve the
          application.
        </p>
      ),
      date: "March 2023",
      icon: <img className="img_logo" src={Carve} alt="Carve" />,
    },
    {
      id: 2,
      title: "Carve Part 2",
      occasion: "Google Solution Challenge 2023",
      prize: "Global Top 100",
      image: GSC,
      description: (
        <p>
          Google Solution Challenge essentially is the same concept as Kitahack
          as they are both organized under the name of Google. However, this is
          on a bigger global scale. After refining and improving Carve based on
          the feedback from the judges in Kitahack, we used the same solution to
          secure a spot in the global top 100 finalists of this hackathon.
          Google Solution Challenge is a prestigious worldwide hackathon with
          over 2000+ participants aimed to tackle United Nation's SDGs.
          <p />
          We developed Carve in 4 months, a mobile application specifically
          designed for expectant mothers, providing comprehensive support and
          resources throughout their pregnancy journey. It offers features such
          as prenatal health tracking, personalized insights, a platform for
          connecting with healthcare professionals and other expectant mothers,
          and a user-friendly interface for easy navigation and engagement.
          <p />
          We also collaborated closely with Google Developer Experts to refine
          and enhance Carve, leveraging their expertise and guidance. Conducted
          hospital visits and engaged with 19 medical professionals, 4 NGOs, and
          20+ pregnant mothers to validate the problem and gather valuable
          insights for shaping Carve.
        </p>
      ),
      date: "April 2023",
      icon: <img className="img_logo" src={Carve} alt="Carve" />,
    },
    {
      id: 3,
      title: "Arcadia",
      occasion: "ImagineHack",
      prize: "Best Visual Award",
      image: ImagineHack,
      description: (
        <p>
          In this hackathon, with the same team, we are the winner of Best
          Visual award at ImagineHack 2023, a 3-day hackathon competition hosted
          by Taylor's University Agents of Tech, with a cash prize of over
          RM7,200.
          <p />
          In the process, we developed Arcadia, a Flutter mobile app that
          leverages facial and emotion detection to boost productivity and
          combat short attention spans. Integrated AI-driven facial detection to
          accurately measure the user's concentration level during their focus
          sessions. Furthermore, we integrated gamification elements and a peer
          mentoring system within Arcadia to enhance productivity and
          consistency, creating an engaging and supportive environment for
          users.
          <p />
          Most importantly, we created an attractive UI/UX design for Arcadia,
          which received recognition from judges for its visually appealing
          interface.
        </p>
      ),
      date: "May 2023",
      icon: <img className="img_logo" src={Arcadia} alt="Arcadia" />,
    },
    {
      id: 4,
      title: "Hivemind",
      occasion: "University of Malaya Start-Up Challenge",
      prize: "Champion",
      image: UMSC,
      description: (
        <p>
          The first-place winner of UM Start-Up Challenge 2023, held by
          Universiti Malaya Entrepreneurship Secretariat (UMES) for their
          UMPreneur 2023 event.
          <p />
          The team and I co-founded Hivemind, a startup solution that plans to
          connect companies and universities in Malaysia, enabling students to
          undertake real-world projects as their final year projects (FYP).
          Hivemind bridges the skill gap between academia and industry by
          allowing companies to propose real problems for university students to
          work on and propose solutions as their FYP.
          <p />
          Furthermore, Hivemind provides students with valuable real-world and
          hands-on experience while offering companies access to a pool of top
          and talented students. The judges praised Hivemind for its innovative
          approach and its potential to foster collaboration between companies
          and universities. Collaborated with industry professionals and design
          experts to refine the Hivemind concept, receiving positive feedback
          and support.
        </p>
      ),
      date: "May 2023",
      icon: <img className="img_logo" src={Hivemind} alt="Hivemind" />,
    },
    {
      id: 5,
      title: "Reimagined GIGI Coffee",
      occasion: "Reimagine Foldables for Malaysians",
      prize: "First Runner Up",
      image: SamsungFoldable,
      description: (
        <p>
          I was honored to secure the first runner-up position in Samsung's
          Reimagine Foldables for Malaysians UI/UX Hackathon, a prestigious
          competition focused on enhancing the UI/UX experience of local F&B
          apps on foldable screens.
          <p />
          With a prize pool of nearly 40,000 Ringgit worth of Samsung devices, I
          successfully redesigned the Gigi Coffee app, implementing a responsive
          layout, immersive app continuity, optimized flex mode, and larger
          screen features.
          <p />
          Through these upgrades, I maximized the potential of the Galaxy Fold's
          larger screen, providing users with an enhanced experience. I employed
          Figma, Photoshop, and Canva to create visually stunning designs and
          prototypes, which were presented to a panel of esteemed judges,
          including CEOs, design lecturers, and Samsung product managers.
          <p />
          Interestingly, we also received a personal invite from GIGI Coffee, a
          multi-million dollar coffee franchise, to pitch our designs in their
          headquarters. In the end, the GIGI Coffee team gave very positive
          feedback to our team and even asked for our design deck.
        </p>
      ),
      date: "June 2023",
      icon: <img className="img_logo" src={GIGICoffee} alt="GIGICoffee" />,
    },
    {
      id: 6,
      title: "XcessCITY",
      occasion: "Taylor's Makerspace Hackathon",
      prize: "Second Runner Up",
      image: TMHackathon,
      description: (
        <p>
          I was honored to secure the first runner-up position in Samsung's
          Reimagine Foldables for Malaysians UI/UX Hackathon, a prestigious
          competition focused on enhancing the UI/UX experience of local F&B
          apps on foldable screens.
          <p />
          With a prize pool of nearly 40,000 Ringgit worth of Samsung devices, I
          successfully redesigned the Gigi Coffee app, implementing a responsive
          layout, immersive app continuity, optimized flex mode, and larger
          screen features.
          <p />
          Through these upgrades, I maximized the potential of the Galaxy Fold's
          larger screen, providing users with an enhanced experience. I employed
          Figma, Photoshop, and Canva to create visually stunning designs and
          prototypes, which were presented to a panel of esteemed judges,
          including CEOs, design lecturers, and Samsung product managers.
          <p />
          Interestingly, we also received a personal invite from GIGI Coffee, a
          multi-million dollar coffee franchise, to pitch our designs in their
          headquarters. In the end, the GIGI Coffee team gave very positive
          feedback to our team and even asked for our design deck.
        </p>
      ),
      date: "August 2023",
      icon: <img className="img_logo" src={xcessCity} alt="xcessCITY" />,
    },
  ];
  return (
    <div className="timeline_elements">
      <VerticalTimeline>
        {timeline.map((elements) => {
          return (
            
            <VerticalTimelineElement
              key={elements.id}
              date={elements.date}
              dateClassName="date_custom"
              icon={elements.icon}
            >
              <h3 className="vertical-timeline-element-title">
                {" "}
                {elements.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {" "}
                {elements.occasion + " - " + elements.prize}
              </h5>
              <div className="photo-comp">
                <img
                  src={elements.image}
                  alt="ImagineHack"
                 
                />
              </div>
              {elements.description}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default ProjectTimeline;
