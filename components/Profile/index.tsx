import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { SkillLevel } from "@/components/Profile/components";
import {
  Item,
  ItemTitle,
  ItemName,
  ItemInfo,
  ItemText,
  ItemList,
} from "@/components/Profile/components/Item";
import { Section } from "@/components/Profile/components/Section";
import Icon from "@/components/Icon";
import Tag from "@/components/Tag";
import PrintOnly from "@/components/PrintOnly";
import getDateDiff from "@/utils/getDateDiff";
import { Resume } from "@/public/markov_iakov_resume.yml";

interface ProfileProps {
  profile: Resume;
}

const useStyles = createUseStyles({
  experienceAt: ({ theme }) => ({
    color: theme.font.color.off,
  }),
  experienceLength: ({ theme }) => ({
    color: theme.font.color.off,
  }),
  tags: ({ theme }) => ({
    display: "inline-block",
    fontSize: "0.8em",
  }),
  projectLink: ({ theme }) => ({
    fontSize: 20,
    lineHeight: "16px",
    color: theme.font.color.main,
  }),
  projectURL: {
    fontSize: "0.8em",
    margin: "0 8px",
  },
});

const Profile: FunctionComponent<ProfileProps> = ({ profile, children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <>
      {children}

      <Section title="Experience">
        {profile.experience.map((exp) => {
          const lengthHint = `${exp.from} - ${exp.to || "Present"}`;
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
                  <span className={classes.experienceLength} title={lengthHint}>
                    {diffYears > 0 && `${diffYears} year`}
                    {diffYears ? 1 && "s " : " "}
                    {diffMonths > 0 && `${diffMonths} month`}
                    {diffMonths ? 1 && "s " : " "}
                  </span>
                  <PrintOnly>&nbsp; {lengthHint}</PrintOnly>
                </ItemInfo>
              </ItemTitle>
              <ItemText>{exp.note}</ItemText>
              <ItemList items={exp.highlights}></ItemList>
            </Item>
          );
        })}
      </Section>

      <Section title="Skills">
        {profile.skills.map((skill) => {
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
                <div className={classes.tags}>
                  {skill.tech.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </Item>
          );
        })}
      </Section>

      <Section title="Projects">
        {profile.projects.map((project) => {
          return (
            <Item key={project.name}>
              <ItemTitle>
                <ItemName>{project.name}</ItemName>
                <ItemInfo>
                  {project.link && (
                    <>
                      <PrintOnly>
                        <a
                          href={project.link}
                          className={classes.projectURL}
                          target="_blank"
                        >
                          {project.link}
                        </a>
                      </PrintOnly>
                      <a
                        href={project.link}
                        className={classes.projectLink}
                        target="_blank"
                      >
                        <Icon icon="new-tab" />
                      </a>
                    </>
                  )}
                </ItemInfo>
              </ItemTitle>
              <ItemText>{project.note}</ItemText>
            </Item>
          );
        })}
      </Section>

      <Section title="Languages">
        {profile.languages.map((lang) => {
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

export default Profile;
