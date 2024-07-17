import React, { useState } from 'react';
import CameraStream from './CameraStream';
import StartButton from './StartButton';
import StopButton from './StopButton';
import DetectedItems from './DetectedItems';

const App = () => {
  const [isStreaming, setIsStreaming] = useState(false);

  const handleStart = async () => {
    setIsStreaming(true); // Set streaming state immediately
    try {
      const response = await fetch('http://localhost:5005/start');
      if (!response.ok) {
        console.error('Failed to start object detection');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleStop = async () => {
    setIsStreaming(false); // Set streaming state immediately
    try {
      const response = await fetch('http://localhost:5005/stop');
      if (!response.ok) {
        console.error('Failed to stop object detection');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800">YOLO Object Detection</h1>
      </header>
      <div className="flex space-x-4">
        <div className="w-3/5 bg-white p-4 rounded shadow-lg">
          <div className="flex justify-center mb-4">
            <StartButton onClick={handleStart} />
            <StopButton onClick={handleStop} />
          </div>
          {isStreaming && <CameraStream />}
        </div>
        <div className="w-2/5 bg-white p-4 rounded shadow-lg">
          <DetectedItems />
        </div>
      </div>
    </div>
  );
};

export default App;
