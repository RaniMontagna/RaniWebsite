import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} data-aos="fade-up">
      <CardActionArea href={props.link} target="_blank" className="card">
        <CardMedia
          component="img"
          alt={props.title}
          height="180"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}