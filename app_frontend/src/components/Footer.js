import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles(theme => ({
  linkButton: {
    color: theme.palette.grey.A700
  },
  footer: {
    marginTop: theme.spacing(5),
  }
}))


function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container component='footer' maxWidth='lg' className={classes.footer}>
        <Divider />
        <Grid container spacing={2} justify='center'>
          <Grid item>
            <Button
              variant='link'
              color='default'
              size='large'
              startIcon={<GitHubIcon />}
              href="https://github.com/matttan90/"
              className={classes.linkButton}
            >
              Github
          </Button>
          </Grid>
          <Grid item>
            <Button
              variant='link'
              color='default'
              size='large'
              startIcon={<LinkedInIcon />}
              href='https://www.linkedin.com/in/matthew-tan-98713077/'
              className={classes.linkButton}
            >
              LinkedIn
          </Button>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          thanks for visiting!
      </Typography>
      </Container>
    </React.Fragment>
  )
}

export default Footer
