import React from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid'; // Import the volume icon

const VolumeControl = () => {
  return (
    <div className="w-[300px] flex items-center gap-2">
      <SpeakerWaveIcon className="w-6 h-6 text-black" />
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer"
        style={{
          background: 'linear-gradient(to right, #64748b 50%, #e5e7eb 50%)',
        }}
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          background-color: #64748b; /* Same color as the progress bar */
          border-radius: 50%;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background-color: #64748b;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default VolumeControl;
