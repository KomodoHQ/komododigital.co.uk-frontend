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
    client_cop: file(relativePath: { eq: "portfolio/CoP@3x.png" }) {
      childImageSharp {
        fixed(width: 142) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_digitalbarriers: file(relativePath: { eq: "portfolio/DB@3x.png" }) {
      childImageSharp {
        fixed(width: 58) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }

    client_elanders: file(relativePath: { eq: "portfolio/elanders@3x.png" }) {
      childImageSharp {
        fixed(width: 163) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_gichd: file(relativePath: { eq: "portfolio/gichd@3x.png" }) {
      childImageSharp {
        fixed(width: 129) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_htl: file(relativePath: { eq: "portfolio/HTL@3x.png" }) {
      childImageSharp {
        fixed(width: 63) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_isg: file(relativePath: { eq: "portfolio/ISG@3x.png" }) {
      childImageSharp {
        fixed(width: 128) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_itv: file(relativePath: { eq: "portfolio/ITV@3x.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_legrand: file(relativePath: { eq: "portfolio/Legrand@3x.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_spacegroup: file(relativePath: { eq: "portfolio/logo-space-group@3x.png" }) {
      childImageSharp {
        fixed(width: 111) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_newcastleuni: file(relativePath: { eq: "portfolio/NewcastleUni@3x.png" }) {
      childImageSharp {
        fixed(width: 135) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_northumbriapolice: file(relativePath: { eq: "portfolio/Northumbria-police@3x.png" }) {
      childImageSharp {
        fixed(width: 133) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_northumbriauni: file(relativePath: { eq: "portfolio/NorthumbriaUni@3x.png" }) {
      childImageSharp {
        fixed(width: 147) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_onward: file(relativePath: { eq: "portfolio/onward-logo@3x.png" }) {
      childImageSharp {
        fixed(width: 136) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_orchard: file(relativePath: { eq: "portfolio/Orchard@3x.png" }) {
      childImageSharp {
        fixed(width: 135) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_streetstream: file(relativePath: { eq: "portfolio/streetstream@3x.png" }) {
      childImageSharp {
        fixed(width: 125) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_thingco: file(relativePath: { eq: "portfolio/ThingCo@3x.png" }) {
      childImageSharp {
        fixed(width: 139) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;