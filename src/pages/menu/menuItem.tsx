import React from "react";

import {
  Card,
  CardContent,
  Theme,
  createStyles,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { MenuItem } from "../../server";

export { MenuItemCard };

interface MenuItemCardProps {
  item: MenuItem;
  addToCart: () => void;
}

function MenuItemCard(props: MenuItemCardProps) {
  const { item, addToCart } = props;
  const classes = useStyles();

  return (
    <Card className={classes.cardRoot}>
      <CardContent className={classes.cardContent}>
        <img
          src={item.image}
          alt={`menu item for ${item.name}`}
          width={150}
          height={150}
        />
        <div className={classes.titleAndAction}>
          <div className={classes.cardTitle}>{item.name}</div>
          <IconButton onClick={addToCart}>
            <AddCircleIcon className={classes.addIcon} color="primary" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {},
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: 0,
    },
    cardActions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    cardTitle: {},
    titleAndAction: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    addIcon: {
      width: 32,
      height: 32,
    },
  })
);
