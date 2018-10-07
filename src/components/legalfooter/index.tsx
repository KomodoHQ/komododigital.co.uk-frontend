import React, { ReactNode } from 'react';
import { Link } from '@reach/router';
import "./legalfooter.css";

interface Props {
  data: any;
}

const LegalFooter: React.SFC<Props> = ({ data }) => {
  return (
    <footer>
        <div>
          Komodo Digital Copyright &copy; 2018
          <Link to="/">Privacy Policy</Link>
          |
          <Link to="/">Terms and Conditions</Link>
        </div>
        <div>
          Get in touch on:
          <Link to="tel:0191 228 6555">0191 228 6555</Link>
        </div>
    </footer>
  );
};

export default LegalFooter;
