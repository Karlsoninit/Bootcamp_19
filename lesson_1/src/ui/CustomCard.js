import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 440,
  },
});

export function CustomCard({ title, sku, sale }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <h2 style={{ position: "absolute" }}> SALE</h2> */}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../images/${sku}_1.jpg`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {sale && (
            <Typography gutterBottom variant="h5" component="h2">
              SALE
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

Card.defaultProps = {
  sku: "00498002915966300",
  sale: false,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  sku: PropTypes.number,
};
