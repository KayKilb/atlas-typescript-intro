import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';
import placeholder from '../assets/placeholder.jpg';

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col gap-2 h-full justify-center items-center p-4">
      <CoverArt coverImage={placeholder} />
      <SongTitle title="Pink Pony Club" artist="Chappell Roan" />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}
