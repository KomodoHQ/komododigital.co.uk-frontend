import React, { ReactNode } from 'react';
import moment from 'moment';

interface Props {
  children?: ReactNode;
  data: any;
}

const BlogSummaryView: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
      <div>
        <img src={data.imageSource} width="300" height="150" />
      </div>
      <h1>{data.title}</h1>
      <span>{moment(data.date).format('DD MMMM YYYY')}</span>
    </div>
  );
};

export default BlogSummaryView;
