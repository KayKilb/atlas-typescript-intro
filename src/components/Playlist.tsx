import React from 'react';
import PlayListItem from './PlayListItem';

// Define types for the playlist props
interface PlaylistProps {
  playlist: Song[];
  currentSong: Song | null;
  onSongSelect: (song: Song) => void;
}

interface Song {
  id: number;
  title: string;
  genre: string;
  length: string;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist, currentSong, onSongSelect }) => {
  return (
    <div className="playlist space-y-2 max-h-screen overflow-y-auto">
      {playlist.map((item) => (
        <PlayListItem
          key={item.id}
          song={item}
          isSelected={currentSong?.id === item.id}
          onClick={() => onSongSelect(item)}
        />
      ))}
    </div>
  );
};

export default Playlist;
