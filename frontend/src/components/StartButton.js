import React from 'react';

const StartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-green-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-green-600 mx-2">
      Start
    </button>
  );
};

export default StartButton;
