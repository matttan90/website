/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'


const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(10),
  },
}));


const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container component='main' maxWidth='lg' className={classes.main}>
            {children}
          </Container>
          <Footer />
        </React.Fragment>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
