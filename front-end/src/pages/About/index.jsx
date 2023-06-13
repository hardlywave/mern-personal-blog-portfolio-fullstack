import React, { useEffect, useState } from "react";
import { TextPrintingAnimation } from "../../scripts/TextPrintingAnimation";
import Button from "@mui/material/Button";
import styles from "./About.module.scss";

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
            data-remove="50"
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
          <header>
            <h1>About Me and This Project</h1>
          </header>
          <section>
            <h2>Denis Tsimafeyenka</h2>
            <p>
              Hello, I'm Denis Tsimafeyenka, an innovative Frontend Developer
              with a passion for crafting exceptional user experiences. I
              specialize in JavaScript, TypeScript, and Next.js, and I'm
              proficient in building and maintaining responsive and scalable
              projects.
            </p>
            <p>
              Welcome to my personal blog, a hub for all things web development!
              Here, I share valuable insights, tips, and tutorials on JavaScript
              (JS), TypeScript (TS), and popular libraries like React. Whether
              you're a beginner or an experienced developer, you'll find a
              wealth of information to enhance your skills and stay up to date
              with the latest trends in the industry. Explore the various posts
              covering topics such as coding techniques, best practices, and
              exciting new features. As you browse through the content, the view
              counts on each post will give you an idea of their popularity. If
              you'd like to engage further and leave comments on the posts,
              simply register for an account. Join the community, expand your
              knowledge, and let's grow together in the fascinating world of web
              development!
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
