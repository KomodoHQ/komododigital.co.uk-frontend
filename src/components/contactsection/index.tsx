import React, { ReactNode } from 'react';

interface Props {
  data: any;
}

const ContactSection: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
        ContactSection
        {children}
    </div>
  );
};

export default ContactSection;
