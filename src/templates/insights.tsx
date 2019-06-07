import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import TitleText from '../components/titletext';
import BlogGrid from '../components/bloggrid';
import BlogPost from '../components/blogpost';
import SeeMoreButton from '../components/seemorebutton';
import CenterContent from '../components/centercontent';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  const { nextPage, totalArticles, numPages } = props.pageContext;
  const lastPage = numPages === nextPage;
  const viewedArticles = lastPage ? (totalArticles % 21) + (nextPage - 1) * 21 : (nextPage) * 21;

  const styles = {
    progress: {
      width: '35%',
      backgroundColor: '#d8d8d8',
      margin: 'auto',
    },
    bar: {
      height: 8,
      backgroundColor: 'black',
      width: `${(viewedArticles / totalArticles) * 100}%`,
    },
  };

  return (
    <Layout data={props.data} inverted={true} background="#EAEAEA">
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
      <CenterContent>
        <p style={{ textAlign: 'center' }}>
          You've viewed {viewedArticles} of {totalArticles} articles
          <div style={styles.progress}>
              <div style={styles.bar}></div>
          </div>
        </p>
      </CenterContent>
      <SeeMoreButton className={'topPaddingSmall bottomPaddingMedium'} title="See More Insights" link={`insights/${nextPage}`} disabled={lastPage} />
    </Layout>
  );
};
