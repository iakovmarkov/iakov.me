import { FunctionComponent } from "react";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { createUseStyles, useTheme } from "react-jss";

import resume from "@/public/markov_iakov_resume.yml";

const useStyles = createUseStyles({
  introContainer: {
    display: "flex",
    flexDirection: "row",
  },
  intro: ({ theme }) => ({
    flex: 2,

    "& p": {
      margin: `0 0 ${theme.size.md}px`,
    },
  }),
  photo: ({ theme }) => ({
    flex: 1,
    margin: theme.size.md,
  }),
  photoLink: {
    display: "block",
    lineHeight: 0,
  },
  skill: ({ theme }) => ({
    margin: `${theme.size.sm}px 0 ${theme.size.lg}px`,
  }),
  skillTitle: ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.color.border}`,
    margin: `${theme.size.sm}px 0`,
  }),
  skillName: ({ theme }) => ({
    margin: `${theme.size.sm}px 0`,
  }),
  skillInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  skillLevel: {
    fontSize: "36px",
    lineHeight: 1,
    margin: 0,
    padding: 0,
    fontFamily: "'Poppins', sans-serif",
  },
});

const Section: FunctionComponent<any> = ({ title, children }) => (
  <article>
    <h2>{title}</h2>
    {children}
  </article>
);

const About: NextPage = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Layout>
      <h1>About me</h1>
      <div className={classes.introContainer}>
        <div className={classes.intro}>
          <ReactMarkdown source={resume.intro} />
        </div>
        <div className={classes.photo}>
          <a
            href="/profile/full.jpg"
            target="_blank"
            className={classes.photoLink}
          >
            <img
              src={"/profile/avatar.jpg" || resume.photo}
              alt={resume.name}
            />
          </a>
        </div>
      </div>

      <Section title="Skills">
        {resume.skills.map((skill) => {
          return (
            <div className={classes.skill}>
              <div className={classes.skillTitle}>
                <h3 className={classes.skillName}>{skill.name}</h3>
                <div className={classes.skillInfo}>
                  <span className={classes.skillLevel} title={`${skill.level}`}>
                    *****
                  </span>
                </div>
              </div>
              <p>{skill.note}</p>
              {skill.tech && skill.tech.length > 0 && (
                <>
                  <p>Technology used:</p>
                  <ul>
                    {skill.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          );
        })}
      </Section>

      <Section title="Experience">
        {resume.experience.map((exp) => {
          let title = exp.role;
          if (exp.company) {
            title += ` at ${exp.company}`;
          }

          return (
            <div key={title}>
              <div className={classes.skillTitle}>
                <h4 className={classes.skillName}>{title}</h4>
                <div className={classes.skillInfo}>
                  <span>
                    From: {exp.from} | Until: {exp.to || "now"}
                  </span>
                </div>
              </div>
              <p>{exp.note}</p>
              {exp.highlights && exp.highlights.length > 0 && (
                <ul>
                  {exp.highlights?.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </Section>

      <Section title="Projects">
        {resume.projects.map((project) => {
          return (
            <div key={project.name}>
              <div className={classes.skillTitle}>
                <h4 className={classes.skillName}>{project.name}</h4>
                <div className={classes.skillInfo}>
                  {project.github && (
                    <a href={project.github} target="_blank">
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank">
                      URL
                    </a>
                  )}
                </div>
              </div>
              <p>{project.note}</p>
            </div>
          );
        })}
      </Section>

      <Section title="Languages">
        {resume.languages.map((lang) => {
          return (
            <div key={lang.name}>
              <div className={classes.skillTitle}>
                <h4 className={classes.skillName}>{lang.name}</h4>
                <div className={classes.skillInfo}>
                  <span>{lang.proficiency}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Section>
    </Layout>
  );
};

export default About;
