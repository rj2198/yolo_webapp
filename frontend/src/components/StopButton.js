import React from 'react';

const StopButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-red-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-red-600 mx-2">
      Stop
    </button>
  );
};

export default StopButton;
