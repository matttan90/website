import React from 'react'

import SEO from '../components/SEO'
import Layout from '../layouts/layout'
import Image from '../components/StaticQuery'
import JourneyCard from '../components/JourneyCard'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'



const useStyles = makeStyles(theme => ({
  section: {
    // marginTop and paddingTop offsets scrolling to anchortag to avoid appbar
    marginTop: -theme.spacing(10),
    paddingTop: theme.spacing(10),
    marginBottom: theme.spacing(4)
  },
  sectionTitle: {
    marginBottom: theme.spacing(4)
  },
}));


function Section(props) {
  const { id, children, sectionTitle } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box id={id} component='section' className={classes.section}>
        <Typography
          variant='h4'
          align='center'
          className={classes.sectionTitle}>
          {sectionTitle}
        </Typography>
        {children}
      </Box>
    </React.Fragment>
  )
}


function AboutMePage() {
  return (
    <Layout>
      <SEO title='About Me' />

      <Section id='aboutme' sectionTitle='About Me'>
        <Container maxWidth='xs'>
          <Box marginTop={2} />
          <Image filename="matt.png" />
        </Container>
        <Typography variant='body1' align='center'>
          About me WIP
        </Typography>
      </Section>

      <Section id='journey' sectionTitle='My Journey'>
        <Grid container direction='column' spacing={3}>
          <Grid item>
            <JourneyCard
              imageFilename='deliveroo.png'
              location='Deliveroo, London, UK'
              title='Algorithms Data Scientist'
              timePeriod='August 2019 - Present'
              content=
              'I am part of the Network Supply Algorithms team of data scientists and engineers.
              Our goal is to ensure optimal rider supply for every zone at any point in time.
            My involvements include designing forecasting models and architecting a modular
            system to integrate with the current system.'
        />
          </Grid>

          <Grid item>
            <JourneyCard
              imageFilename='worldremit.png'
              location='WorldRemit, London, UK'
              title='Machine Learning Engineer'
              timePeriod='March 2019 - July 2019'
              content=
              'I am part of the Network Supply Algorithms team of data scientists and engineers.
              Our goal is to ensure optimal rider supply for every zone at any point in time.
            My involvements include designing forecasting models and architecting a modular
            system to integrate with the current system.'
          />
          </Grid>

          <Grid item>
            <JourneyCard
              imageFilename='rollsroyce.png'
              location='Rolls-Royce Plc, Midlands, UK'
              title='Manufacturing Engineer'
              timePeriod='September 2014 - February 2018'
              content=
              "I learnt my craft as a manufacturing engineer across multiple technical
              disciplines at Rolls-Royce's manufacturing offices and factories. I eventually
            specialized in metal additive layer manufacturing whereby I was running finite
            element analysis (FEA) simulations to optimise printing orientations and support
            structures. The aim was to reduce thermal residual stresses, reduce component
            distortion and to develop a repeatable, cost-efficient manufacturing process."
          />
          </Grid>

          <Grid item>
            <JourneyCard
              imageFilename='imperial.png'
              location='Imperial College London, London, UK'
              title='Mechanical Engineering'
              timePeriod='October 2010 - July 2014'
              content=
              'I am part of the Network Supply Algorithms team of data scientists and engineers.
              Our goal is to ensure optimal rider supply for every zone at any point in time.
            My involvements include designing forecasting models and architecting a modular
            system to integrate with the current system.'
          />
          </Grid>

          <Grid item>
            <JourneyCard
              imageFilename='innovia.png'
              location='Innovia Technology, Cambridge, UK'
              title='Intern'
              timePeriod='Summer 2013'
              content=
              'I am part of the Network Supply Algorithms team of data scientists and engineers.
              Our goal is to ensure optimal rider supply for every zone at any point in time.
            My involvements include designing forecasting models and architecting a modular
            system to integrate with the current system.'
          />
          </Grid>
        </Grid>
      </Section>

      <Section id='underthehood' sectionTitle='Under The Hood'>
        <Typography align='center'>Under The Hood WIP</Typography>
        <Box marginTop={50} />
      </Section>

      <Section id='connect' sectionTitle='Connect'>
        <Typography align='center'>Under The Hood WIP</Typography>
        <Grid container spacing={1} maxWidth='md' justify='center'>
          <Grid item xs={3} md={2} align='center'>
            <Link component='a' target="_blank" href="https://www.facebook.com/matthew.tan.334/">
              <Image filename='facebook.png' style={{ maxWidth: 60 }} />
            </Link>
          </Grid>
          <Grid item xs={3} md={2} align='center'>
            <Link component='a' target="_blank" href="https://www.linkedin.com/in/matthew-tan-98713077/">
              <Image filename='linkedin.png' style={{ maxWidth: 60 }} />
            </Link>
          </Grid>
          <Grid item xs={3} md={2} align='center'>
            <Link component='a' target="_blank" href="https://github.com/matttan90/">
              <Image filename='github.png' style={{ maxWidth: 60 }} />
            </Link>
          </Grid>
        </Grid>
      </Section>

      <Section id='typography' sectionTitle='Typography'>
        <Typography variant='h1' align='center'>h1</Typography>
        <Typography variant='h2' align='center'>h2</Typography>
        <Typography variant='h3' align='center'>h3</Typography>
        <Typography variant='h4' align='center'>h4</Typography>
        <Typography variant='h5' align='center'>h5</Typography>
        <Typography variant='h6' align='center'>h6</Typography>
        <Typography variant='subtitle1' align='center'>subtitle1</Typography>
        <Typography variant='subtitle2' align='center'>subtitle2</Typography>
        <Typography variant='body1' align='center'>body1</Typography>
        <Typography variant='body2' align='center'>body2</Typography>
        <Typography variant='caption' align='center'>caption</Typography>
        <Typography variant='button' align='center'>button</Typography>
        <Typography variant='overline' align='center'>overline</Typography>
        <Typography variant='srOnly' align='center'>srOnly</Typography>
        <Typography variant='inherit' align='center'>inherit</Typography>
      </Section>

    </Layout >
  )
}
export default AboutMePage
