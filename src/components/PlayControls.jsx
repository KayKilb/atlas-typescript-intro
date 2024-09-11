import React from 'react';
import { PlayIcon, ForwardIcon, BackwardIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';

const PlayControls = () => {
  return (
    <div className="flex items-center justify-between w-full h-[63px] bg-gray-100 p-4 rounded-lg">
      <button className="text-gray-400 hover:text-gray-700">
        1x
      </button>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <BackwardIcon className="h-5 w-5 text-gray-600" />
      </button>
      <button className="p-3 rounded-full bg-black hover:bg-gray-800">
        <PlayIcon className="h-6 w-6 text-white" />
      </button>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <ForwardIcon className="h-5 w-5 text-gray-600" />
      </button>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default PlayControls;
