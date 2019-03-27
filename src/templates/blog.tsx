import React from 'react';
import Layout from '../components/layout';
import CenterContent from '../components/centercontent';

export default (props) => {
  const title = props.data.allWordpressPost ? props.data.allWordpressPost.edges[0].node.title : "No Title Found";
  return <Layout data={props.data} inverted={true} background="#EAEAEA">
      <img src={props.imageSource} width="100%" />

      <CenterContent className={`topPaddingSmall`}>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </CenterContent>
    </Layout>;
};
