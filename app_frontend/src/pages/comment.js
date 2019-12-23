import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/SEO'
import MattTest from '../components/Api'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const CommentPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container maxWidth='md'>
      <Typography variant='h4' align='center'>Comments Model</Typography>
      <Typography align='center'>This is the comments labelling model</Typography>
      <Box marginTop={2}/>
      <Container maxWidth='md' align='center'>
        <MattTest align='center'/>
      </Container>
    </Container>
  </Layout>
)

export default CommentPage
