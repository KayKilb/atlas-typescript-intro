import React from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

const MusicPlayer = () => {
  return (
    <div className="music-player flex flex-col md:flex-row justify-between gap-8">
      {/* Currently Playing Section */}
      <div className="w-[426px] h-[1043px] md:w-[436px] md:h-[662px] md:top-[-1435px] md:left-[820px]">
        <CurrentlyPlaying />
      </div>

      {/* Playlist Section */}
      <div className="w-[426px] h-[1043px] md:w-[481px] md:h-[662px]">
        <Playlist />
      </div>
    </div>
  );
};

export default MusicPlayer;
