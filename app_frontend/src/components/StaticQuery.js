import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      //https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources
      return <Img
        alt={props.alt}
        fluid={image.node.childImageSharp.fluid}
        style={props.style}
      />;
    }}
  />
);

Image.defaultProps = {
  style: {}
}

export default Image;
