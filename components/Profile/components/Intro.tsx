import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  title: ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: `0 0 ${theme.size.lg}px 0`,
  }),
  titleText: {
    margin: 0,
    flex: 1,
    "@media only print": {
      fontStyle: "italic",
      fontWeight: 900,
    },
  },
  titleLink: ({ theme }) => ({
    color: theme.font.color.off,
    fontSize: "32px",
    height: "32px",
    marginLeft: theme.size.lg,
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
});

export const Intro: FunctionComponent<any> = ({ children, links, title }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <>
      <div className={classes.title}>
        <h1 className={classes.titleText}>{title}</h1>
        {links &&
          links.map((link: any) => (
            <a
              className={classes.titleLink}
              href={link.href}
              title={link.title}
            >
              {link.el}
            </a>
          ))}
      </div>
      <div className={classes.introContainer}>
        <div className={classes.intro}>{children}</div>
        <div className={classes.photo}>
          <a
            href="https://iakov.me/profile/full.jpg"
            target="_blank"
            className={classes.photoLink}
          >
            <img src="/profile/avatar.jpg" alt="A photo of me" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
