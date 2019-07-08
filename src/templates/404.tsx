import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import TitleText from '../components/titletext';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => (
  <Layout data={props.data} pageMeta={props.pageMeta} inverted={true} background="#EAEAEA">
    <TitleText
      title="Four oh Four"
      subtitle="Page Not Found"
      className={'topPaddingSmall bottomPaddingNone'}
    >
      {renderAst(props.htmlAst)}
    </TitleText>
  </Layout>
);
