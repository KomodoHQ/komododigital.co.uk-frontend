import { graphql } from 'gatsby';

export const siteMeta = graphql`
  fragment siteMeta on Query {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
  }
`;

export const komodoLogo = graphql`
  fragment komodoLogo on Query {
    logo: file(relativePath: { eq: "images/Komodo@3x.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    logo_inverted: file(relativePath: { eq: "images/Komodo_black@3x.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    avatar: file(relativePath: { eq: "images/avatar.png" }) {
      childImageSharp {
        fixed(width: 70) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

export const clientLogos = graphql`
  fragment clientLogos on Query {
    client_cop: file(relativePath: { eq: "images/portfolio/CoP@3x.png" }) {
      childImageSharp {
        fixed(width: 142) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_digitalbarriers: file(relativePath: { eq: "images/portfolio/DB@3x.png" }) {
      childImageSharp {
        fixed(width: 58) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }

    client_elanders: file(relativePath: { eq: "images/portfolio/elanders@3x.png" }) {
      childImageSharp {
        fixed(width: 163) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_gichd: file(relativePath: { eq: "images/portfolio/gichd@3x.png" }) {
      childImageSharp {
        fixed(width: 129) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_htl: file(relativePath: { eq: "images/portfolio/HTL@3x.png" }) {
      childImageSharp {
        fixed(width: 63) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_isg: file(relativePath: { eq: "images/portfolio/ISG@3x.png" }) {
      childImageSharp {
        fixed(width: 128) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_itv: file(relativePath: { eq: "images/portfolio/ITV@3x.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_legrand: file(relativePath: { eq: "images/portfolio/Legrand@3x.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_spacegroup: file(relativePath: { eq: "images/portfolio/logo-space-group@3x.png" }) {
      childImageSharp {
        fixed(width: 111) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_newcastleuni: file(relativePath: { eq: "images/portfolio/NewcastleUni@3x.png" }) {
      childImageSharp {
        fixed(width: 135) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_northumbriapolice: file(relativePath: { eq: "images/portfolio/Northumbria-police@3x.png" }) {
      childImageSharp {
        fixed(width: 133) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_northumbriauni: file(relativePath: { eq: "images/portfolio/NorthumbriaUni@3x.png" }) {
      childImageSharp {
        fixed(width: 147) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_onward: file(relativePath: { eq: "images/portfolio/onward-logo@3x.png" }) {
      childImageSharp {
        fixed(width: 136) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_orchard: file(relativePath: { eq: "images/portfolio/Orchard@3x.png" }) {
      childImageSharp {
        fixed(width: 135) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_streetstream: file(relativePath: { eq: "images/portfolio/streetstream@3x.png" }) {
      childImageSharp {
        fixed(width: 125) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_thingco: file(relativePath: { eq: "images/portfolio/ThingCo@3x.png" }) {
      childImageSharp {
        fixed(width: 139) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_iamproperty: file(relativePath: { eq: "images/portfolio/iamproperty@3x.png" }) {
      childImageSharp {
        fixed(width: 159) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_theo: file(relativePath: { eq: "images/portfolio/theo@3x.png" }) {
      childImageSharp {
        fixed(width: 102) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_citizens: file(relativePath: { eq: "images/portfolio/citizens@3x.png" }) {
      childImageSharp {
        fixed(width: 52) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    client_xenith: file(relativePath: { eq: "images/portfolio/xenith@3x.png" }) {
      childImageSharp {
        fixed(width: 127) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

export const standardsLogos = graphql`
  fragment standardsLogos on Query {
    standard_abstract: file(relativePath: { eq: "images/standards/Abstract@3x.png" }) {
      childImageSharp {
        fixed(width: 168) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_adobecc: file(relativePath: { eq: "images/standards/AdobeCC@3x.png" }) {
      childImageSharp {
        fixed(width: 120) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_android: file(relativePath: { eq: "images/standards/Android@3x.png" }) {
      childImageSharp {
        fixed(width: 43) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_angular: file(relativePath: { eq: "images/standards/Angular@3x.png" }) {
      childImageSharp {
        fixed(width: 44) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_apple: file(relativePath: { eq: "images/standards/Apple@3x.png" }) {
      childImageSharp {
        fixed(width: 40) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_aws: file(relativePath: { eq: "images/standards/AWS@3x.png" }) {
      childImageSharp {
        fixed(width: 69) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_azure: file(relativePath: { eq: "images/standards/Azure@3x.png" }) {
      childImageSharp {
        fixed(width: 107) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_chai: file(relativePath: { eq: "images/standards/Chai@3x.png" }) {
      childImageSharp {
        fixed(width: 49) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_codeception: file(relativePath: { eq: "images/standards/Codeception@3x.png" }) {
      childImageSharp {
        fixed(width: 64) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_cyberessentials: file(relativePath: { eq: "images/standards/CyberEssentials@3x.png" }) {
      childImageSharp {
        fixed(width: 57) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_html5: file(relativePath: { eq: "images/standards/HTML5@3x.png" }) {
      childImageSharp {
        fixed(width: 38) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_invision: file(relativePath: { eq: "images/standards/InVision@3x.png" }) {
      childImageSharp {
        fixed(width: 115) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_istqb: file(relativePath: { eq: "images/standards/ISTQB@3x.png" }) {
      childImageSharp {
        fixed(width: 91) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_java: file(relativePath: { eq: "images/standards/Java@3x.png" }) {
      childImageSharp {
        fixed(width: 39) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_jest: file(relativePath: { eq: "images/standards/Jest@3x.png" }) {
      childImageSharp {
        fixed(width: 48) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_node: file(relativePath: { eq: "images/standards/Node@3x.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_php: file(relativePath: { eq: "images/standards/PHP@3x.png" }) {
      childImageSharp {
        fixed(width: 70) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_react: file(relativePath: { eq: "images/standards/React@3x.png" }) {
      childImageSharp {
        fixed(width: 62) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_selenium: file(relativePath: { eq: "images/standards/Selenium@3x.png" }) {
      childImageSharp {
        fixed(width: 52) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_sketch: file(relativePath: { eq: "images/standards/Sketch@3x.png" }) {
      childImageSharp {
        fixed(width: 53) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_swift: file(relativePath: { eq: "images/standards/Swift@3x.png" }) {
      childImageSharp {
        fixed(width: 44) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    standard_xamarin: file(relativePath: { eq: "images/standards/Xamarin@3x.png" }) {
      childImageSharp {
        fixed(width: 49) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }

  }
`;

export const icons = graphql`
  fragment icons on Query {
    icon_consultancy: file(relativePath: { eq: "images/icons/consultancy@3x.png" }) {
      childImageSharp {
        fixed(width: 90) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    icon_design: file(relativePath: { eq: "images/icons/design@3x.png" }) {
      childImageSharp {
        fixed(width: 90) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    icon_development: file(relativePath: { eq: "images/icons/development@3x.png" }) {
      childImageSharp {
        fixed(width: 90) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export const avatars = graphql`
  fragment avatars on Query {
    person_armin: file(relativePath: { eq: "images/people/armin@3x.png" }) {
      childImageSharp {
        fixed(width: 70) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    person_phoebe: file(relativePath: { eq: "images/people/phoebe@3x.png" }) {
      childImageSharp {
        fixed(width: 70) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`