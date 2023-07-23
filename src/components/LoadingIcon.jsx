import React from 'react';

const LoadingIcon = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-10 h-10 border-4 border-black border-opacity-100 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingIcon;