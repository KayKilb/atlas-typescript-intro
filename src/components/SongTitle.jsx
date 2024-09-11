import React from 'react';

const SongTitle = ({ title, author }) => {
  return (
    <div className="flex flex-col items-start space-y-1">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-lg text-gray-600">{author}</p>
    </div>
  );
};

export default SongTitle;
