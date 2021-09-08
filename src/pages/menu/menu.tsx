import React from "react";

import {
  Tabs,
  Tab,
  makeStyles,
  createStyles,
  Theme,
  Grid,
} from "@material-ui/core";

import * as snack from "../../components/snackbar";
import { getMenu, Menu as MenuType } from "../../server";
import { MenuItemCard } from "./menuItem";

interface MenuProps {}

function Menu(props: MenuProps) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);
  const [menu, setMenu] = React.useState<MenuType>({ categories: [] });

  React.useEffect(() => setMenu(getMenu()), []);
  React.useEffect(() => {
    menu.categories.forEach((c) =>
      c.items.forEach((item) => console.log(`${c.name}: ${item.name}`))
    );
  }, [menu]);

  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={tabIndex}
        onChange={(e, value) => setTabIndex(value)}
        scrollButtons="on"
        variant="scrollable"
      >
        {menu.categories.length > 0 &&
          menu.categories.map((c) => (
            <Tab label={c.name} className={classes.tabItem} />
          ))}
      </Tabs>
      {menu.categories[tabIndex] && (
        <Grid container spacing={3} className={classes.grid}>
          {menu.categories[tabIndex].items.map((item, i) => (
            <Grid key={`menu-item-${i}`} item xs={6}>
              <MenuItemCard
                item={item}
                addToCart={() =>
                  snack.openSnack(`Sepete eklendi: ${item.name}`)
                }
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "95%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    tabs: {
      // marginLeft: 16,
      // marginRight: 16,
      marginTop: 8,
      backgroundColor: theme.palette.background.paper,
      width: "100%",
    },
    tabItem: { color: theme.palette.text.primary },
    grid: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
  })
);

export { Menu };
