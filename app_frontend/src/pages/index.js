import React from 'react'

import SEO from '../components/SEO'
import Layout from '../layouts/layout'
import Image from '../components/StaticQuery'
import JourneyCard from '../components/JourneyCard'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import RemoveIcon from '@material-ui/icons/Remove';



const useStyles = makeStyles(theme => ({
  section: {
    // marginTop and paddingTop offsets scrolling to anchortag to avoid appbar
    marginTop: -theme.spacing(10),
    paddingTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  sectionTitle: {
    marginBottom: theme.spacing(4)
  },
  hero:{
    marginBottom: theme.spacing(4)
  }
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
          className={classes.sectionTitle}
        >
          {sectionTitle}
        </Typography>
        {children}
      </Box>
    </React.Fragment>
  )
}


function AboutMePage() {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title='Home' />

      <Section id='aboutme' sectionTitle='About Me'>
        <Container maxWidth='xs' className={classes.hero}>
          <Image filename="matt.png" />
        </Container>
        <Container maxWidth='sm' className={classes.hero}>
          <Typography paragraph variant='body1' align='center'>
            Hi! I'm Matt, and this is my playground.
          </Typography>
          <Typography paragraph variant='body1' align='center'>
            I currently work as an Algorithm's Data Scientist at Deliveroo. I love having the
            opportunity to craft solutions based on Algorithms and Machine Learning to solve
            business problems. Apart from that, I also don't shy away from the engineering
            aspects - which is equally interesting to me.
          </Typography>
          <Typography paragraph variant='body1' align='center'>
            I am not really a frontend developer, but I thought it would be fun to learn a little
            bit of React. Here, you'll find a little bit about myself, and if you're interested
            in how I built this website, theres a section on that below, and the
            source code is on Github.
          </Typography>
        </Container>
      </Section>

      <Section id='journey' sectionTitle='My Journey'>
        <Grid container direction='column' spacing={3}>
          <Grid item>
            <JourneyCard
              imageFilename='deliveroo.png'
              location='Deliveroo, London, UK'
              title='Algorithms Data Scientist'
              timePeriod='August 2019 - Present'
              mainContent='
              Deliveroo is a online food delivery company whereby I am part of the Network Supply 
              Algorithms team. Our aim is to build fair and efficient systems to ensure optimal 
              rider supply for every zone at any point in time.
              '
              expandedContent='
              My involvements include the end-to-end process of developing forecasting models 
              and architecting orchestration systems in a modular way to integrate with the current 
              system.
              '
        />
          </Grid>

          <Grid item>
            <JourneyCard
              imageFilename='worldremit.png'
              location='WorldRemit, London, UK'
              title='Machine Learning Engineer'
              timePeriod='March 2019 - July 2019'
              mainContent='
              WorldRemit is an online money transfer service. I was part of the Machine Learning 
              team responsible to work with stakeholders across the business to deploy ML systems
              where suitable. I mostly worked on Fraud Detection.
              '
              expandedContent='
              It was here where I really learnt to appreciate Machine Learning and Software 
              Engineering together. I had great mentors who guided me to where I am today. We were 
              a closed knit team and worked hard to iteratively improve the fraud detection system. 
              One of the most fun moments was when, we architected and deployed a graph database 
              capable of pseudo real-time (sub 5s) insert and query of close to 100 predictive 
              features on entity relationships.
              '
          />
          </Grid>

          <Grid item>
            <JourneyCard
              imageFilename='rollsroyce.png'
              location='Rolls-Royce Plc, Midlands, UK'
              title='Manufacturing Engineer'
              timePeriod='September 2014 - February 2018'
              mainContent="
              I worked in the Civil Aerospace division of Rolls-Royce where I honed my craft as a
              manufacturing engineer. I was part of the Additive Layer Manufacturing (ALM) team, 
              looking to develop manufacturing processes for the first mass-manufactured metal ALM 
              component in Rolls-Royce.
              "
              expandedContent='
              I specialized in running finite element analysis (FEA) simulations to optimise 
              printing orientations and support structures. The aim was to reduce thermal residual 
              stresses, reduce component distortion and to develop a repeatable, cost-efficient 
              manufacturing process.
              '
          />
          </Grid>

          <Grid item>
            <JourneyCard
              imageFilename='imperial.png'
              location='Imperial College London, London, UK'
              title='Mechanical Engineering (MEng)'
              timePeriod='October 2010 - July 2014'
              mainContent='
              I studied Mechanical Engineering at university. I am always curious about how things
              worked, and mechanical engineering was a great platform for me to satisfy that itch.
              It was also where I was first exposed to programming (with Matlab) and microcontrollers.
              '
              expandedContent="
              I loved my 4 years at Imperial. I've learnt many life lessons here, but I think the
              most valuable lesson I've learnt here is that there really isn't any boundaries to
              learning.. It gave me the confidence that I can learn anything I want (within reason)
              as long as I put in the effort.
              "
          />
          </Grid>

          <Grid item>
            <JourneyCard
              imageFilename='innovia.png'
              location='Innovia Technology, Cambridge, UK'
              title='Intern - Innovation Consultancy'
              timePeriod='Summer 2013'
              mainContent='
              Innovia Technology is a boutique innovation consultancy specialising in the front end 
              (early stages) of innovation, working with many global companies. It was an eye opener 
              to see creativity embraced and how my brilliant colleagues would apply them in real 
              life.
              '
              expandedContent="
              This internship gave me a different perspective in life. I really enjoyed my time here. 
              Colleages are like friends, and a job is like a hobby? Or not. I realised that my 
              working life is part of my life, and I would like to have a job I really liked. 
              Colleagues can be friends, and I can build real relationships with colleagues too.
              "
          />
          </Grid>
        </Grid>
      </Section>

      <Section id='underthehood' sectionTitle='Under The Hood'>
        <Container maxWidth='md' className={classes.hero}>
        <Typography paragraph variant='body1' align='center'>
          In this section, I'll try to describe the infrastructure hosting this website in more
          detail. If you're interested in the source code, please feel free to visit Github.
        </Typography>

        <Container maxWidth='xs' className={classes.hero}>
          <Image filename="infrastructure.png" />
        </Container>

        <Typography paragraph variant='body1' align='center'>
          The frontend website is written using the React framework, and finally dockerised into an
          Nginx web server. Nginx also acts as a reverse proxy to forward requests to the backend.
          A separate backend Python Flask application is written for future machine learning based
          projects.
        </Typography>

        <Typography paragraph variant='body1' align='center'>
          The hosting of website is done all in Google Cloud Platform (GCP) using a Kubernetes
          cluster. Whilst I know that this is probably not the best way to host a website, and
          it's backend services, I thought it would be a good practise to demonstrate how
          different modular services can be easily scaled horizontally. I used Terraform to
          provision all resources. With careful parameterisation, Terraform is great, as it allows
          to programmatically define how different resources would interact and depend on each
          other as they are dynamically created.
        </Typography>

        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon><RemoveIcon /></ListItemIcon>
            <ListItemText primary="A kubernetes cluster" />
          </ListItem>
          <ListItem>
            <ListItemIcon><RemoveIcon /></ListItemIcon>
            <ListItemText primary="A static external ip address" />
          </ListItem>
          <ListItem>
            <ListItemIcon><RemoveIcon /></ListItemIcon>
            <ListItemText primary="A frontend service with a publicly exposed load-balancer (via the static ip address)" />
          </ListItem>
          <ListItem>
            <ListItemIcon><RemoveIcon /></ListItemIcon>
            <ListItemText primary="A backend service within the private kubernetes network." />
          </ListItem>
          <ListItem>
            <ListItemIcon><RemoveIcon /></ListItemIcon>
            <ListItemText primary="Google Cloud DNS to programmatically assign the public-ip of the load-balancer to my website domain" />
          </ListItem>
        </List>
        </Container>
      </Section>

      <Section id='futureprojects' sectionTitle='Future ML Projects'>
        <Typography align='center'>
          This space is for future ML based projects whereby predictive models would be hosted in the backend.
        </Typography>
        <Box marginTop={20} />
      </Section>

      <Section id='connect' sectionTitle='Connect'>
        <Container maxWidth='sm' className={classes.hero}>
          <Typography variant='body1' align='center'>
            If you would like to reach me about anything at all, please feel free to connect!
          </Typography>
        </Container>

        <Grid container spacing={1} maxWidth='md' justify='center'>
          <Grid item xs={3} md={2} align='center'>
            <Link component='a' target="_blank" href="https://twitter.com/Matthew39340303/">
              <Image filename='twitter.png' style={{ maxWidth: 60 }} />
            </Link>
          </Grid>
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

    </Layout >
  )
}
export default AboutMePage
