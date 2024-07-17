import React from 'react';

const CameraStream = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Object Detection Stream</h2>
      <div id="camera-stream" className="border rounded shadow-md">
        <img src="http://localhost:5005/video_feed" alt="Camera Stream" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default CameraStream;
