import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Collapse,
  Typography,
  IconButton,
  makeStyles,
  Grid,
  Badge,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import clsx from "clsx";

const cardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function SupportServiceCard(props) {
  const classes = cardStyles();
  const {
    image,
    header,
    description,
    expandedText,
    color,
    notifications,
  } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item lg={3} sm={6} xl={3} xs={12}>
      {notifications ? (
        <Badge
          Badge
          color="secondary"
          overlap="rectangle"
          badgeContent={notifications}
        >
          <Card
            className={classes.root}
            style={{ backgroundColor: color, color: "#fff" }}
          >
            <CardMedia className={classes.media} image={image} title={header} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {header}
              </Typography>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expand={expanded}
                aria-label="show more"
              >
                <ExpandMore />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>{expandedText}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Badge>
      ) : (
        <Card
          className={classes.root}
          style={{ backgroundColor: color, color: "#fff" }}
        >
          <CardMedia className={classes.media} image={image} title={header} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {header}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expand={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>{expandedText}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      )}
    </Grid>
  );
}
