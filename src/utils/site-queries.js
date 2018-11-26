import { graphql } from 'gatsby';

export const komodoLogo = graphql`
  fragment komodoLogo on Query {
    logo: file(relativePath: { eq: "Komodo@3x.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    logo_inverted: file(relativePath: { eq: "Komodo_black@3x.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

export const clientLogos = graphql`
  fragment clientLogos on Query {
    client_logos: allFile(filter:{ relativePath:{ regex: "/portfolio\\/.*?@3x\\.png/" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 170) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }    
        }
      }
    }
  }
`;