import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="playlist-item p-2 border-b border-gray-200 flex justify-between items-center text-sm md:text-base">
      <div className="flex-1 text-base font-medium text-left">{title}</div>
      <div className="text-xs md:text-sm text-gray-500 text-left w-1/4">{genre}</div>
      <div className="text-xs md:text-sm text-gray-500 text-right w-1/4">{length}</div>
    </div>
  );
};

export default PlayListItem;
