import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";

/**
 * I have to call `createUseStyles` inside the render function because of a bug in React JSS:
 * https://github.com/cssinjs/jss/issues/1320
 * This is really suboptimal and will leak memory. Good thing that the components here will never re-render.
 */

const itemStyles = createUseStyles({
  item: ({ theme }) => ({
    margin: `${theme.size.md}px 0 ${theme.size.lg}px`,
    padding: `${theme.size.md}px 0 ${theme.size.md}px`,
  }),
});

export const Item: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = itemStyles({ theme });

  return <section className={classes.item}>{children}</section>;
};

export const ItemTitle: FunctionComponent<{ oneline?: boolean }> = ({
  children,
  oneline,
}) => {
  const titleStyles = createUseStyles({
    title: ({ theme }) => ({
      display: "flex",
      justifyContent: "space-between",
      borderBottom: `1px solid ${theme.color.border}`,
      margin: `0 0 ${theme.size.sm}px 0`,
      padding: `${theme.size.sm}px 0`,

      [theme.responsive.mobile]: {
        display: oneline ? "flex" : "block",
      },
    }),
  });

  const theme = useTheme();
  const classes = titleStyles({ theme });

  return <div className={classes.title}>{children}</div>;
};

const nameStyles = createUseStyles({
  name: {
    margin: 0,
  },
});

export const ItemName: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = nameStyles({ theme });

  return <h4 className={classes.name}>{children}</h4>;
};

export const ItemInfo: FunctionComponent = ({ children }) => {
  const infoStyles = createUseStyles({
    info: ({ theme }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      fontFamily: theme.font.title,
      fontSize: "0.9em",
      "& *[title]": {
        cursor: "help",
      },

      [theme.responsive.mobile]: {
        justifyContent: "left",
      },
    }),
  });

  const theme = useTheme();
  const classes = infoStyles({ theme });

  return <div className={classes.info}>{children}</div>;
};

const textStyles = createUseStyles({
  text: ({ theme }) => ({
    margin: `0 0 ${theme.size.sm}px`,
  }),
});

export const ItemText: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = textStyles({ theme });

  return <p className={classes.text}>{children}</p>;
};

const listStyles = createUseStyles({
  list: ({ theme }) => ({
    margin: `0 0 ${theme.size.sm}px`,
    padding: 0,
    listStyle: "none",
  }),
  element: ({ theme }) => ({
    borderLeft: `${theme.size.sm}px solid ${theme.color.border}`,
    padding: `0 0 0 ${theme.size.md}px`,
    margin: `${theme.size.md}px 0`,
  }),
});

export const ItemList: FunctionComponent<{ items?: string[] }> = ({
  items,
  children,
}) => {
  const theme = useTheme();
  const classes = listStyles({ theme });

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <ItemText>{children}</ItemText>
      <ul className={classes.list}>
        {items.map((item) => (
          <li key={item} className={classes.element}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
