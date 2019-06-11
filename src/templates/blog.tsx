import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import CenterContent from '../components/centercontent';
import TitleText from '../components/titletext';
import ContentSection from '../components/contentsection';
import BlogGrid from '../components/bloggrid';
import BlogPost from '../components/blogpost';

export default (props) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
  }).Compiler;

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

      <CenterContent className={`topPaddingExtraLarge bottomPaddingNone`}>
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </CenterContent>
      <ContentSection title="Insights" className="topPaddingSmall">
          {renderAst(props.insightsIntro)}
      </ContentSection>
      <BlogGrid>
          {props.insights.map((insight) => {
            return (
              <BlogPost
                  key={insight.node.title}
                  slug={insight.node.slug}
                  title={insight.node.title}
                  image={insight.node.imageSource}
              />
            );
          })}
      </BlogGrid>
    </Layout>;
};
