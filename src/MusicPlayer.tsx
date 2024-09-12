import React, { useEffect, useState } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

interface Song {
  id: number;
  title: string;
  genre: string;
  length: string;
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist'
      );
      const data = await response.json();
      setPlaylist(data);
      setCurrentSong(data[0]);
    };

    fetchPlaylist();
  }, []);

const getNextSong = useCallback(() => {
    if (playlist.length === 0) return null;
    const currentIndex = currentSong ? playlist.findIndex(song => song.id === currentSong.id) : -1;
    const nextIndex = (currentIndex + 1) % playlist.length;
    return playlist[nextIndex];
  }, [playlist, currentSong]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSong = getNextSong();
      if (nextSong) {
        setCurrentSong(nextSong);
      }
    }, 5000); // Change song every 5 seconds

    return () => clearInterval(intervalId);
  }, [getNextSong]);

  const handleSongChange = (song: Song) => {
    setCurrentSong(song);
  };

  return (
    <div className="music-player flex flex-col lg:flex-row gap-4 h-full max-w-7xl mx-auto p-4">
      {/* Currently Playing Section */}
      <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden relative min-h-[630px] lg:min-h-0">
        {currentSong && <CurrentlyPlaying song={currentSong} />}
      </div>

      {/* Playlist Section */}
      <div className="flex-1 bg-[#FFE3FD] rounded-lg shadow-md overflow-hidden p-4">
        <h2 className="text-2xl font-bold mb-4">Playlist</h2>
        <Playlist
          playlist={playlist}
          currentSong={currentSong}
          onSongSelect={handleSongChange}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
