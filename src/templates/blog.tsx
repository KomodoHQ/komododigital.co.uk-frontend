import React from 'react';
import Layout from '../components/layout';

export default (props) => {
  return (
    <Layout data={props.data}>
      <img src={props.imageSource} />

      <h1>{props.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: props.html,
        }}
      />
    </Layout>
  );
};
