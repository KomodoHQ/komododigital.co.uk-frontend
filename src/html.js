import React from 'react';
import PropTypes from 'prop-types';

import AppleTouchIcon from './assets/images/apple-touch-icon.png';
import AppleTouchIcon57 from './assets/images/apple-touch-icon-57x57.png';
import AppleTouchIcon72 from './assets/images/apple-touch-icon-72x72.png';
import AppleTouchIcon76 from './assets/images/apple-touch-icon-76x76.png';
import AppleTouchIcon114 from './assets/images/apple-touch-icon-114x114.png';
import AppleTouchIcon120 from './assets/images/apple-touch-icon-120x120.png';
import AppleTouchIcon144 from './assets/images/apple-touch-icon-144x144.png';
import AppleTouchIcon152 from './assets/images/apple-touch-icon-152x152.png';
import AppleTouchIcon180 from './assets/images/apple-touch-icon-180x180.png';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="google-site-verification" content="ddFf2mrb1XOAdGAVsSMIqaZ4m06lVMIlc3oUVc4W7No" />
          <link rel="apple-touch-icon" href={AppleTouchIcon} />
          <link rel="apple-touch-icon" sizes="57x57" href={AppleTouchIcon57} />
          <link rel="apple-touch-icon" sizes="72x72" href={AppleTouchIcon72} />
          <link rel="apple-touch-icon" sizes="76x76" href={AppleTouchIcon76} />
          <link rel="apple-touch-icon" sizes="114x114" href={AppleTouchIcon114} />
          <link rel="apple-touch-icon" sizes="120x120" href={AppleTouchIcon120} />
          <link rel="apple-touch-icon" sizes="144x144" href={AppleTouchIcon144} />
          <link rel="apple-touch-icon" sizes="152x152" href={AppleTouchIcon152} />
          <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon180} />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script
            type="text/javascript"
            src="//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js"
            async
          />
          <script type="text/javascript" src="https://secure.leadforensics.com/js/159776.js" ></script>
          <noscript><img alt="" src="https://secure.leadforensics.com/159776.png" style={{display: "none"}} /></noscript>
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
