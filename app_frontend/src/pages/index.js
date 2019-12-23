import React from 'react'

import SEO from '../components/SEO'
import Layout from '../layouts/layout'
import Image from '../components/StaticQuery'
import History from '../components/History'


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
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Divider } from '@material-ui/core';
import scrollTo from 'gatsby-plugin-smoothscroll';



// section requires paddingtop to avoid fixed bar from ccovering it.
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  section: {
    marginTop: -theme.spacing(10),
    paddingTop: theme.spacing(10),
    marginBottom: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardMedia2: {
    paddingTop: '56.25%', // 16:9
    paddingBottom: '12%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [[1, "https://source.unsplash.com/random"],
[2, "https://source.unsplash.com/random"],
[3, "https://source.unsplash.com/random"]];
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Section(props) {
  const { id, children } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box id={id} component='section' className={classes.section}>
        {children}
      </Box>
    </React.Fragment>
  )
}


function AboutMePage() {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title='About Me' />

      <Section id='aboutme'>
        <Container maxWidth='xs'>
          <Typography variant="h4" align="center" >About Me</Typography>
          <Box marginTop={2} />
          <Image filename="matt.png" />
        </Container>
      </Section>

      <Section id='journey'>
        <Typography>Journey Start</Typography>
        <Typography>Journey Mid</Typography>
        <History />
        <Typography>Journey End</Typography>
      </Section>




      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key={1} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              {/* <CardMedia className={classes.cardMedia}> */}
              <Image filename="matt.png" />
              {/* </ CardMedia > */}

              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                    </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                    </Typography>
              </CardContent>
            </Card>
          </Grid>



          {cards.map(card => (
            <Grid item key={card[0]} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia2}
                  image={card[1]}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                    </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                    </Button>
                  <Button size="small" color="primary">
                    Edit
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}

        </Grid>

      </Container>

      <Container maxWidth='xs'>
        <Typography variant="h4" align="center" >About Me</Typography>
        <Box marginTop={2} />
        <Image filename="matt.png" />
      </Container>


      <Container maxWidth='xs'>
        <Typography variant="h4" align="center" >About Me</Typography>
        <Box marginTop={2} />
        <Image filename="matt.png" />
      </Container>

      <Container maxWidth='xs'>
        <Typography variant="h4" align="center" >About Me</Typography>
        <Box marginTop={2} />
        <Image filename="matt.png" />
      </Container>

      <Container id='someid' maxWidth='xs'>
        <Typography variant="h4" align="center" >Real Test</Typography>
        <Box marginTop={2} />
        <Image filename="matt.png" />
      </Container>


      <Container maxWidth='xs'>
        <Typography variant="h4" align="center" >About Me</Typography>
        <Box marginTop={2} />
        <Image filename="matt.png" />
      </Container>


      <Container maxWidth='xs'>
        <Typography variant="h4" align="center" >About Me</Typography>
        <Box marginTop={2} />
        <Image filename="matt.png" />
      </Container>


      <Container maxWidth='xs'>
        <Typography variant="h4" align="center" >About Me</Typography>
        <Box marginTop={2} />
        <Image filename="matt.png" />
      </Container>



    </Layout>
  )
}
export default AboutMePage
