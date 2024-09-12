//VolumeControl.tsx
import React, { useState } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';

interface VolumeControlProps {
  value: number;
  onChange: (newVolume: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ value, onChange }) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value, 10));
    onChange(parseInt(event.target.value, 10)); // Pass the updated value to the parent component
  };

  // Calculate the background gradient based on sliderValue
  const backgroundGradient = `linear-gradient(to right, #FF29EB ${sliderValue}%, #FFE4FD ${sliderValue}%)`;

  return (
    <div className="w-[300px] flex items-center gap-2">
      <SpeakerWaveIcon className="w-6 h-6 text-black" />
      <div className="relative w-full h-2 rounded-full overflow-hidden">
        {/* Background track */}
        <div className={`absolute w-full h-full bg-gray-300 rounded-full`}></div>
        {/* Progress track based on sliderValue */}
        <div className={`absolute w-full h-full bg-clip-border ${backgroundGradient} rounded-full`}></div>
        {/* Slider thumb */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleVolumeChange}
          className="appearance-none cursor-pointer focus:outline-none w-4 h-4 bg-white rounded-full shadow-md -translate-x-2 absolute top-1/2 left-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default VolumeControl;
