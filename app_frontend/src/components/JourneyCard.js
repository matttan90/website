import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Image from './StaticQuery'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { border } from '@material-ui/system';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 15
  },
  location:{
    color: '#24716d'
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

function JourneyCard(props) {
  const { imageFilename, location, title, timePeriod, content } = props
  const classes = useStyles();

  return (
    <Card className={classes.card} variant='outlined'>
      <Grid container maxWidth='xl'>

        {/* Image */}
        <Grid item xs={12} md={5}>
          <Image filename={imageFilename} />
        </Grid>

        {/* Content */}
        <Grid item xs={12} md={7} >
          <Container className={classes.gridContent}>
            <Typography variant='subtitle2' align='center'>{location}</Typography>
            <Typography variant='body2' align='center'>{title}</Typography>
            <Typography variant='body2' align='center'>{timePeriod}</Typography>
            <Divider className={classes.divider} />
            <Typography variant='body2' className={classes.typographyContent}>
              {content}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Card>
  );
}

export default JourneyCard
