import React, { forwardRef } from 'react';
const Footer = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      style={{
        backgroundColor: 'black',
        height: '100vh',
        color: 'white',
      }}
    >
      Footer
    </div>
  );
});

export default Footer;
