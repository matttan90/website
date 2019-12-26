import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Image from '../components/StaticQuery'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { border } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    borderRadius: 15
  },
  content: {
    padding: theme.spacing(2)
  },
  container: {
    padding: theme.spacing(1)
  },
  gridContent: {
    padding: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  typographyContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <div className={classes.root}>

        <Grid container spacing={3} maxWidth='xl'>

          <Grid item xs={12}>
            <Card className={classes.card} variant="outlined">
              <Grid container maxWidth='xl'>
                <Grid item xs={12} md={5}>
                  <Image filename="deliveroo.png" />
                </Grid>
                <Grid item xs={12} md={7} >
                  <Container className={classes.gridContent}>
                    <Typography variant='body2' align='center'>Deliveroo, London, UK</Typography>
                    <Typography variant='body2' align='center'>Algorithms Data Scientist</Typography>
                    <Typography variant='body2' align='center'>August 2019 - Present</Typography>
                    <Divider className={classes.divider}/>
                    <Typography variant='body2' className={classes.typographyContent}>
                      I am part of the Network Supply Algorithms team of data scientists and engineers.
                      Our goal is to ensure optimal rider supply for every zone at any point in time.
                      My involvements include designing forecasting models and architecting a modular
                      system to integrate with the current system.
                    </Typography>
                  </Container>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card} variant="outlined">
              <Grid container maxWidth='xl'>
                <Grid item xs={12} md={5}>
                  <Image filename="worldremit.png" />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant='body2' align='center'>WorldRemit, London, UK</Typography>
                  <Typography variant='body2' align='center'>Machine Learning Engineer</Typography>
                  <Typography variant='body2' align='center'>March 2019 - July 2019</Typography>
                  <Divider />
                  <Typography variant='body2' className={classes.content} >
                    I am part of the Network Supply Algorithms team of data scientists and engineers.
                    Our goal is to ensure optimal rider supply for every zone at any point in time.
                    My involvements include designing forecasting models and architecting a modular
                    system to integrate with the current system.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card} variant="outlined">
              <Grid container maxWidth='xl'>
                <Grid item xs={12} md={5}>
                  <Image filename="rollsroyce.png" />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant='body2' align='center'>Rolls-Royce Plc, Midlands, UK</Typography>
                  <Typography variant='body2' align='center'>Manufacturing Engineer</Typography>
                  <Typography variant='body2' align='center'>September 2014 - February 2018</Typography>
                  <Divider />
                  <Typography variant='body2' className={classes.content}>
                    I learnt my craft as a manufacturing engineer across multiple technical
                    disciplines at Rolls-Royce's manufacturing offices and factories. I eventually
                    specialized in metal additive layer manufacturing whereby I was running finite
                    element analysis (FEA) simulations to optimise printing orientations and support
                    structures. The aim was to reduce thermal residual stresses, reduce component
                    distortion and to develop a repeatable, cost-efficient manufacturing process.

                    I learnt my craft as a manufacturing engineer across multiple technical
                    disciplines at Rolls-Royce's manufacturing offices and factories. I eventually
                    specialized in metal additive layer manufacturing whereby I was running finite
                    element analysis (FEA) simulations to optimise printing orientations and support
                    structures. The aim was to reduce thermal residual stresses, reduce component
                    distortion and to develop a repeatable, cost-efficient manufacturing process.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card} variant="outlined">
              <Grid container maxWidth='xl'>
                <Grid item xs={12} md={5}>
                  <Image filename="imperial.png" />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant='body2' align='center'>Imperial College London, London, UK</Typography>
                  <Typography variant='body2' align='center'>Mechanical Engineering</Typography>
                  <Typography variant='body2' align='center'>October 2010 - July 2014</Typography>
                  <Divider />
                  <Typography variant='body2' className={classes.content}>
                    I am part of the Network Supply Algorithms team of data scientists and engineers.
                    Our goal is to ensure optimal rider supply for every zone at any point in time.
                    My involvements include designing forecasting models and architecting a modular
                    system to integrate with the current system.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card} variant="outlined">
              <Grid container maxWidth='xl'>
                <Grid item xs={12} md={5}>
                  <Image filename="innovia.png" />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant='body2' align='center'>Innovia Technology, Cambridge, UK</Typography>
                  <Typography variant='body2' align='center'>Intern</Typography>
                  <Typography variant='body2' align='center'>Summer 2013</Typography>
                  <Divider />
                  <Typography variant='body2' className={classes.content}>
                    I am part of the Network Supply Algorithms team of data scientists and engineers.
                    Our goal is to ensure optimal rider supply for every zone at any point in time.
                    My involvements include designing forecasting models and architecting a modular
                    system to integrate with the current system.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

        </Grid>

      </div>
    </Container >
  );
}