import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import TitleText from '../components/titletext';
import BlogGrid from '../components/bloggrid';
import BlogPost from '../components/blogpost';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  return (
    <Layout data={props.data}>
      <TitleText
        title="Insights"
        subtitle="What We Know"
        showShowreel={false}
        className={'topPaddingSmall bottomPaddingNone'}
      >
        {renderAst(props.insightsIntro)}
      </TitleText>
      <BlogGrid>
        {props.posts.map((post) => {
          return (
            <BlogPost
              key={post.node.slug}
              slug={post.node.slug}
              title={post.node.title}
              image={post.node.imageSource}
            />
          );
        })}
      </BlogGrid>
    </Layout>
  );
};
