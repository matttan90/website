import React from 'react';
import clsx from 'clsx';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 15
  },
  location: {
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
  mainContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  expandedContent: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short,
    }),
  },
  cardActions: {
    padding: 0,
    margin: 0
  }
}));

function JourneyCard(props) {
  const { imageFilename, location, title, timePeriod, mainContent, expandedContent } = props
  const classes = useStyles();

  // State
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
            <Typography variant='body2' className={classes.mainContent}>
              {mainContent}
            </Typography>

            {/* Non-expanded state */}
            <Collapse in={!expanded} timeout='auto' unmountOnExit>
              <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Collapse>

            {/* Expanded state */}
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <Typography variant='body2' className={classes.expandedContent}>
                {expandedContent}
              </Typography>
              <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show less"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Collapse>
          </Container>
        </Grid>

      </Grid>
    </Card>
  );
}

export default JourneyCard
