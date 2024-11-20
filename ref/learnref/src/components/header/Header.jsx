import React from 'react';

const Header = ({ scroll }) => {
  const handleClick = () => {
    scroll();
  };

  return (
    <div
      style={{
        backgroundColor: 'orange',
        height: '100vh',
      }}
    >
      <div>Header</div>
      <button onClick={handleClick} style={{ color: 'black' }}>
        Test
      </button>
    </div>
  );
};

export default Header;
