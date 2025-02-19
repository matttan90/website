import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import MuiLink from '@material-ui/core/Link';


const Link = React.forwardRef(function Link(props, ref) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
