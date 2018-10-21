import React from 'react';
import Layout from '../components/layout';
import ContentSection from '../components/contentsection';

export default (props) => {
  const title = props.data.allWordpressPost ? props.data.allWordpressPost.edges[0].node.title : "No Title Found";
  return (
    <Layout data={props.data}>
      <img src={props.imageSource} width="100%" />

      <ContentSection title={title}>
        <div
          dangerouslySetInnerHTML={{
            __html: props.html,
          }}
        />
      </ContentSection>

    </Layout>
  );
};
