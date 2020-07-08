import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import { createUseStyles, useTheme } from "react-jss";
import {
  Section,
  Item,
  ItemTitle,
  ItemName,
  ItemInfo,
  ItemText,
  ItemList,
  SkillLevel,
} from "@/components/About/components";
import Icon from "@/components/Icon";
import getDateDiff from "@/utils/getDateDiff";
import resume from "@/public/markov_iakov_resume.yml";

const useStyles = createUseStyles({
  title: ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: `0 0 ${theme.size.lg}px 0`,
  }),
  titleText: ({ theme }) => ({
    margin: 0,
  }),
  titleLink: ({ theme }) => ({
    color: theme.font.color.off,
    fontSize: "32px",
    height: "32px",
  }),
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
    margin: `0 0 0 ${theme.size.lg}px`,
  }),
  photoLink: {
    display: "block",
    lineHeight: 0,
  },
  experienceAt: ({ theme }) => ({
    color: theme.font.color.off,
  }),
});

const About: FunctionComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <>
      <div className={classes.title}>
        <h1 className={classes.titleText}>About me</h1>
        <a
          className={classes.titleLink}
          href="/markov_iakov_resume.yml"
          title="Download resume as YML"
        >
          <Icon icon="document-file-yml" />
        </a>
      </div>
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

      <Section title="Experience">
        {resume.experience.map((exp) => {
          const lengthHint = `${exp.from} - ${exp.to || "Now"}`;
          const { diffYears, diffMonths } = getDateDiff(exp.from, exp.to);

          const companyEl = exp.company ? (
            <>
              <span className={classes.experienceAt}> at</span> {exp.company}
            </>
          ) : null;

          return (
            <Item key={`${exp.role}_${exp.company}`}>
              <ItemTitle>
                <ItemName>
                  {exp.role}
                  {companyEl}
                </ItemName>
                <ItemInfo>
                  <span title={lengthHint}>
                    {diffYears > 0 && `${diffYears} year`}
                    {diffYears ? 1 && "s " : " "}
                    {diffMonths > 0 && `${diffMonths} month`}
                    {diffMonths ? 1 && "s " : " "}
                  </span>
                </ItemInfo>
              </ItemTitle>
              <ItemText>{exp.note}</ItemText>
              <ItemList items={exp.highlights}>
                <i>Highlights:</i>
              </ItemList>
            </Item>
          );
        })}
      </Section>

      <Section title="Skills">
        {resume.skills.map((skill) => {
          return (
            <Item key={skill.name}>
              <ItemTitle>
                <ItemName>{skill.name}</ItemName>
                <ItemInfo>
                  <SkillLevel level={skill.level} />
                </ItemInfo>
              </ItemTitle>
              <ItemText>{skill.note}</ItemText>
              {skill.tech && (
                <ItemText>
                  Technologies:{" "}
                  {skill.tech.map((t) => (
                    <span key={t}>{t}, </span>
                  ))}
                </ItemText>
              )}
            </Item>
          );
        })}
      </Section>

      <Section title="Projects">
        {resume.projects.map((project) => {
          return (
            <Item key={project.name}>
              <ItemTitle>
                <ItemName>{project.name}</ItemName>
                <ItemInfo>
                  {project.link && (
                    <a href={project.link} target="_blank">
                      <Icon icon="one-finger" />
                    </a>
                  )}
                </ItemInfo>
              </ItemTitle>
              <ItemText>{project.note}</ItemText>
            </Item>
          );
        })}
      </Section>

      <Section title="Languages">
        {resume.languages.map((lang) => {
          return (
            <Item key={lang.name}>
              <ItemTitle>
                <ItemName>{lang.name}</ItemName>
                <ItemInfo>{lang.proficiency}</ItemInfo>
              </ItemTitle>
            </Item>
          );
        })}
      </Section>
    </>
  );
};

export default About;
