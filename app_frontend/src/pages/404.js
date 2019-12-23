import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/SEO'
import Typography from '@material-ui/core/Typography'


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Typography variant='h1'>NOT FOUND</Typography>
    <Typography >You just hit a route that doesn&#39;t exist... the sadness.</Typography>
  </Layout>
)

export default NotFoundPage
