import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/SEO'
import MattTest from '../components/Api'

import Typography from '@material-ui/core/Typography'

const CommentPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Typography variant="h4">Comments Model</Typography>
    <Typography>This is the comments labelling model</Typography>
    <MattTest/>
  </Layout>
)

export default CommentPage
