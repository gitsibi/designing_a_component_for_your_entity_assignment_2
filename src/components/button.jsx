// import React from 'react';

// const ViewProductButton = () => {
//   const buttonText = 'View Product';

//   const buttonStyle = {
//     padding: '8px 16px',
//     backgroundColor: '#007bff',
//     border: 'none',
//     color: '#fff',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   };

//   return <button style={buttonStyle}>{buttonText}</button>;
// };

// export default ViewProductButton;

import React from "react";

const ViewProductButton = () => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
      View Product
    </button>
  );
};

export default ViewProductButton;
