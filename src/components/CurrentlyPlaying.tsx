import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';
import placeholder from '../assets/placeholder.jpg';

export default function CurrentlyPlaying() {
  return (
    <div className="w-[436px] h-[630px] absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-100">
      <CoverArt coverImage={placeholder} />
      <SongTitle title="Pink Pony Club" artist="Chappell Roan" />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}
