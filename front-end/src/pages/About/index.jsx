import React, { useEffect, useState } from "react";
import { TextPrintingAnimation } from "../../scripts/TextPrintingAnimation";
import Button from "@mui/material/Button";
import styles from "./About.module.scss";
import { Skills } from "../../components/";

export const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisiable, setVisiable] = useState(0);
  const [isPreloading, setPreloading] = useState(true);

  useEffect(() => {
    TextPrintingAnimation(setVisiable, setPreloading);
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleSkip = () => {
    setPreloading(false);
  };

  return (
    <div
      style={{
        padding: 30,
        position: "relative",
        backgroundColor: "white",
      }}
    >
      {isPreloading ? (
        <div className={styles.preload}>
          <span
            className={`${styles["preload-text"]} print`}
            data-cursor="|"
            data-remove="20"
            data-delay="50"
            data-pouse="2000"
            style={{ opacity: isVisiable }}
          >
            Preparing the Journey {"<br>"} Unveiling the Magic {"<br>"}
            Unlocking Possibilities {"<br>"} Igniting Imagination...
          </span>
          <Button
            variant="contained"
            onClick={handleSkip}
            style={{ position: "absolute" }}
            className={styles["skip-button"]}
          >
            skip..
          </Button>
        </div>
      ) : (
        <div>
          <section className={styles.about}>
            <div className={styles.container}>
              <h1>About Me</h1>
              <p>
                Hello, I'm Denis Tsimafeyenka, an innovative Frontend Developer
                with a passion for crafting exceptional user experiences. I
                specialize in JavaScript, TypeScript, and Next.js, and I'm
                proficient in building and maintaining responsive and scalable
                projects.
              </p>
              <div class={styles["social-icons"]}>
                <a
                  href="https://github.com/hardlywave"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                    alt="GitHub Profile"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/denis-tsimafeyenka/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                    alt="LinkedIn Profile"
                  />
                </a>
              </div>
            </div>
            <div className={styles.skills}>
              <h2>Tech Stack</h2>
              <Skills />
            </div>
          </section>
          <section className={styles.description}>
            <p>
              Welcome to my personal blog! This platform serves as a hub for
              sharing my projects, experiences, and exciting news in the
              ever-evolving world of technology. Here, you'll find a collection
              of articles and updates that reflect my journey as a developer and
              enthusiast. Feel free to explore, engage, and get inspired! Delve
              into a wide range of posts covering coding techniques, best
              practices, and the latest features. The view counts on each post
              provide an indication of their popularity. To actively participate
              and leave comments on the posts, simply register for an account.
              Join our community, expand your knowledge, and let's grow together
              in the fascinating realm of web development!
            </p>
            {showMore && (
              <div>
                <p>
                  Throughout my career, I have worked with modern libraries and
                  frameworks such as React, Redux, and MUI, enabling me to
                  create dynamic and interactive web applications. I also have
                  experience with Angular, Bootstrap, HTML5, and CSS3, including
                  SCSS, which allows me to leverage a wide range of tools and
                  technologies to deliver outstanding results.
                </p>
                <p>
                  With a solid understanding of Object-Oriented Programming
                  (OOP) principles and expertise in utilizing Node.js and
                  Express for server-side development, I can create robust and
                  efficient web solutions. I have worked with databases like
                  MongoDB, integrating them using Mongoose, and I'm familiar
                  with building tools like Webpack and version control systems
                  like Git.
                </p>
                <p>
                  What sets me apart is my commitment to staying up to date with
                  the latest industry trends and best practices. I am an agile
                  practitioner, utilizing design tools like Figma and project
                  management tools like Jira to ensure efficient project
                  delivery and collaboration.
                </p>
                <p>
                  I take pride in my ability to translate design concepts into
                  functional and visually appealing interfaces. I thrive in
                  collaborative environments, working closely with
                  cross-functional teams to gather requirements, conduct code
                  reviews, and implement new features. My strong problem-solving
                  skills, attention to detail, and dedication to delivering
                  high-quality work have consistently led to successful project
                  outcomes.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, participating in online coding communities, and
                  constantly seeking ways to improve my skills. I am driven by
                  the desire to create meaningful and impactful web experiences
                  that delight users and exceed expectations.
                </p>
                <p>
                  I invite you to explore my portfolio and see firsthand the
                  projects I have worked on. If you're looking for a dedicated
                  and skilled Frontend Developer who can bring your vision to
                  life, let's connect!
                </p>
              </div>
            )}
          </section>
          <Button variant="contained" onClick={handleShowMore}>
            {showMore ? "Show less.." : "Show more.."}
          </Button>
        </div>
      )}
    </div>
  );
};
