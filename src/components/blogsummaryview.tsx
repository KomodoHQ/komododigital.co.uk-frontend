import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

interface Props {
  children: ReactNode;
  data: any;
}

const BlogSummaryView: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
      <div>
        <img src="https://blog.komododigital.co.uk/content/uploads/2018/09/chuttersnap-309362-unsplash-2-640x400.jpg" />
      </div>
      <h1>5 Reasons Why I Finally Started Contributing To Open Source</h1>
      <span>11th September 2018</span>
      {/* <Link to="/">Read -></Link> */}
    </div>
  );
};

export default BlogSummaryView;
