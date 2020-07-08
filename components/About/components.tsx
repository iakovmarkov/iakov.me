import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  section: ({ theme }) => ({
    margin: `${theme.size.lg * 2}px 0`,
  }),
  sectionTitle: ({ theme }) => ({
    margin: `${theme.size.lg}px 0 0`,
  }),

  item: ({ theme }) => ({
    margin: `${theme.size.md}px 0 ${theme.size.lg}px`,
    padding: `0 0 ${theme.size.md}px`,
  }),
  itemTitle: ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.color.border}`,
    margin: `0 0 ${theme.size.sm}px 0`,
    padding: `${theme.size.sm}px 0`,
  }),
  itemName: {
    margin: 0,
  },
  itemInfo: ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9em",
    color: theme.font.color.off,
    cursor: "help",
  }),
  itemText: ({ theme }) => ({
    margin: `0 0 ${theme.size.sm}px`,
  }),
  itemList: ({ theme }) => ({
    margin: `0 0 ${theme.size.sm}px`,
    padding: 0,
    listStyle: "none",
  }),
  itemListEl: ({ theme }) => ({
    borderLeft: `${theme.size.sm}px solid ${theme.color.border}`,
    padding: `0 0 0 ${theme.size.md}px`,
    margin: `${theme.size.md}px 0`,
  }),

  skillLevel: ({ theme, level }) => ({
    fontSize: "36px",
    lineHeight: 1,
    height: 20,
    margin: 0,
    padding: 0,
    fontFamily: "'Poppins', sans-serif",
    color: theme.font.color.main,
    position: "relative",

    "&:after": {
      display: "block",
      content: "' '",
      background: "rgba(255,255,255,0.85)",
      position: "absolute",
      top: "0",
      right: "0",
      width: `${(1 - level) * 100}%`,
      height: "100%",
      pointerEvents: "none",
    },
  }),
});

export const Section: FunctionComponent<any> = ({ title, children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.section}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
};

export const Item: FunctionComponent<any> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <div className={classes.item}>{children}</div>;
};

export const ItemTitle: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <div className={classes.itemTitle}>{children}</div>;
};

export const ItemName: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <h4 className={classes.itemName}>{children}</h4>;
};

export const ItemInfo: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <div className={classes.itemInfo}>{children}</div>;
};

export const ItemText: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <p className={classes.itemText}>{children}</p>;
};

export const ItemList: FunctionComponent<{ items?: string[] }> = ({
  items,
  children,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <ItemText>{children}</ItemText>
      <ul className={classes.itemList}>
        {items.map((item) => (
          <li key={item} className={classes.itemListEl}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export const SkillLevel: FunctionComponent<{ level: number }> = ({ level }) => {
  const theme = useTheme();
  const classes = useStyles({ theme, level });

  const label = `${(level * 100) / 10}/10`;

  return (
    <span className={classes.skillLevel} title={label}>
      *****
    </span>
  );
};

export const Links: FunctionComponent<any> = ({ level }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <span className={classes.skillLevel} title={level}>
      *****
    </span>
  );
};
