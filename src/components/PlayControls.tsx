import React, { useState } from 'react';
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  ArrowPathRoundedSquareIcon
} from '@heroicons/react/24/solid';

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayPauseToggle: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isFirstSong: boolean;
  isLastSong: boolean;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onPlayPauseToggle,
  onPrevious,
  onNext,
  isFirstSong,
  isLastSong
}) => {
  const [speed, setSpeed] = useState<number>(1);
  const [isShuffle, setShuffle] = useState<boolean>(false);

  // Toggle play/pause state
  const handlePlayPause = () => {
    onPlayPauseToggle();
  };

  // Toggle speed between 1x, 2x, and 3x
  const handleSpeedToggle = () => {
    setSpeed((prevSpeed) => (prevSpeed === 3 ? 1 : prevSpeed + 1));
  };

  // Toggle shuffle mode
  const handleShuffleToggle = () => {
    setShuffle((prevShuffle) => !prevShuffle);
  };

  return (
    <div className="flex items-center justify-between w-full h-[63px] bg-gray-100 p-4 rounded-lg">
      {/* Speed Button */}
      <button
        className="text-gray-400 hover:text-gray-700"
        onClick={handleSpeedToggle}
      >
        {speed}x
      </button>

      {/* Back Button */}
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={onPrevious}
        disabled={isFirstSong}
      >
        <BackwardIcon
          className={`h-5 w-5 ${isFirstSong ? 'text-gray-400' : 'text-gray-600'}`}
        />
      </button>

      {/* Play/Pause Button */}
      <button
        className="p-3 rounded-full bg-black hover:bg-gray-800"
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <PauseIcon className="h-6 w-6 text-white" />
        ) : (
          <PlayIcon className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Forward Button */}
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={onNext}
        disabled={isLastSong}
      >
        <ForwardIcon
          className={`h-5 w-5 ${isLastSong ? 'text-gray-400' : 'text-gray-600'}`}
        />
      </button>

      {/* Shuffle Button */}
      <button
        className={`p-2 rounded-full ${isShuffle ? 'bg-purple-500' : 'bg-gray-200'} hover:bg-gray-300`}
        onClick={handleShuffleToggle}
      >
        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default PlayControls;
