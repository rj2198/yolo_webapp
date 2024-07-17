import React from 'react';

const DetectedItems = () => {
  // This component should list the detected items, you can fetch and display them here
  // For now, we will use a placeholder list
  const items = [
    { id: 1, name: 'Car', confidence: 0.95 },
    { id: 2, name: 'Person', confidence: 0.89 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detected Items</h2>
      <ul className="list-disc pl-5">
        {items.map(item => (
          <li key={item.id} className="mb-2">
            <span className="font-bold">{item.name}</span> - Confidence: {item.confidence * 100}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetectedItems;
