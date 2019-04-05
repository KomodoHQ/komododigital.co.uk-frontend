import React from 'react';
import Layout from '../components/layout';
import CenterContent from '../components/centercontent';
import TitleText from '../components/titletext';

export default (props) => {
  const title = props.data.allWordpressPost ? props.data.allWordpressPost.edges[0].node.title : "No Title Found";
  return <Layout data={props.data}>
      <TitleText
        title={title}
        subtitle={`Insights`}
        background={'#000000'}
        invert={true}
        className="topPaddingLarge bottomPaddingNone"
        coverimageRaw={props.imageSource}
        imageOverlap={true}
        showShowreel={false}
        centered={true}
      />

      <CenterContent className={`topPaddingExtraLarge`}>
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </CenterContent>
    </Layout>;
};
