import React, { useState } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';

const VolumeControl: React.FC = () => {
  const [volume, setVolume] = useState<number>(50);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="w-[300px] flex items-center gap-2">
      <SpeakerWaveIcon className="w-6 h-6 text-black" />
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #FF29EB ${volume}%, #FFE4FD ${volume}%)`,
        }}
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          background-color: #FF29EB;
          border-radius: 50%;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background-color: #FF9DF3;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default VolumeControl;
