import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  item: ({ theme }) => ({
    margin: `${theme.size.md}px 0 ${theme.size.lg}px`,
    padding: `${theme.size.md}px 0 ${theme.size.md}px`,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    fontFamily: theme.font.family.title,
    fontSize: "0.9em",
    "& *[title]": {
      cursor: "help",
    },
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
});

export const Item: FunctionComponent<any> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <section className={classes.item}>{children}</section>;
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
