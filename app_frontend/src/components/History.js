import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Image from '../components/StaticQuery'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <div className={classes.root}>
        <Grid container spacing={3} maxWidth='xl'>
          <Grid item xs={12} md={5}>
            <Paper className={classes.paper}>xs=12, md=5</Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper className={classes.paper}>xs=12, md=7</Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image filename="deliveroo.png" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper className={classes.paper}>Something About Deliveroo</Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image filename="worldremit.png" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper className={classes.paper}>Something About Worldremit</Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image filename="rollsroyce.png" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper className={classes.paper}>Something About RollsRoyce</Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image filename="imperial.png" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper className={classes.paper}>Something About Imperial</Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image filename="innovia.png" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper className={classes.paper}>Something About Innovia</Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}