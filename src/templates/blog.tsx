import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import CenterContent from '../components/centercontent';
import TitleText from '../components/titletext';
import ContentSection from '../components/contentsection';
import BlogGrid from '../components/bloggrid';
import BlogPost from '../components/blogpost';
import sanitizeHtml from 'sanitize-html';

export default (props) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
  }).Compiler;

  return (
    <Layout data={props.data} pageMeta={props.pageMeta} noindex={true}>
      <TitleText
        title={props.title}
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
          // Strip HTML tags so they are not included in the word count
          const content = sanitizeHtml(insight.node.content, { allowedTags: [] });
          // Get an approximate word count
          const contentLength = content.replace('\n', ' ').split(' ').length;
          // Average reading speed is 200 words per minute
          const readingTime = Math.ceil(contentLength / 200);

          return (
            <BlogPost
              key={insight.node.title}
              slug={insight.node.slug}
              title={insight.node.title}
              image={insight.node.imageSource}
              readingtime={readingTime}
            />
          );
        })}
      </BlogGrid>
    </Layout>
  );
};
