import React from 'react'

import PropTypes from 'prop-types'
import clsx from 'clsx'
import scrollTo from 'gatsby-plugin-smoothscroll';

import { makeStyles, useTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/ViewList'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'white',
    // marginBottom: 500,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarText: {
    color: '#24716d'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#24716d'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listItemLink: {
    color: '#24716d'
  }
}))


function Header({ siteTitle }) {
  const classes = useStyles();
  const theme = useTheme();

  // State
  const [isDrawerOpen, setDrawerState] = React.useState(false)
  function setDrawerOpen() {
    setDrawerState(true);
  }
  function setDrawerClose() {
    setDrawerState(false);
  }

  return (
    <ClickAwayListener onClickAway={setDrawerClose}>
      <Box component='header' className={classes.root} >
        <CssBaseline />
        <AppBar
          position='fixed'
          elevation={0}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: isDrawerOpen,
          })}
        >
          <Toolbar>
            <IconButton
              aria-label='Open drawer'
              onClick={setDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, isDrawerOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.appBarText} variant='h5'>
              i'm {siteTitle}
            </Typography>
          </Toolbar>
          <Divider />
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={isDrawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Box component='nav' className={classes.drawerHeader}>
            <IconButton onClick={setDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                  <ChevronRightIcon />
                )}
            </IconButton>
          </Box>

          <Divider />

          <List>
            <ListItem button
              className={classes.listItemLink}
              onClick={() => {
                scrollTo('#aboutme');
                setDrawerClose();
              }}
            >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary='Matt' />
            </ListItem>

            <ListItem button
              className={classes.listItemLink}
              onClick={() => {
                scrollTo('#journey');
                setDrawerClose();
              }}
            >
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary='My Journey' />
            </ListItem>

            <ListItem button
              className={classes.listItemLink}
              onClick={() => {
                scrollTo('#someid');
                setDrawerClose();
              }}
            >
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary='testbelow' />
            </ListItem>

            <ListItem button
              component='a'
              href="https://github.com/matttan90/"
              className={classes.listItemLink}
              onClick={setDrawerClose}
            >
              <ListItemIcon><GitHubIcon /></ListItemIcon>
              <ListItemText primary='Github' />
            </ListItem>

            <ListItem button
              component='a'
              href='https://www.linkedin.com/in/matthew-tan-98713077/'
              className={classes.listItemLink}
              onClick={setDrawerClose}
            >
              <ListItemIcon><LinkedInIcon /></ListItemIcon>
              <ListItemText primary='LinkedIn' />
            </ListItem>
          </List>

        </Drawer>

      </Box>
    </ClickAwayListener>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
