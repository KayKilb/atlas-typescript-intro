import React, { useEffect, useState } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

// Define types for the song and playlist data
interface Song {
  id: number;
  title: string;
  genre: string;
  length: string;
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  // Fetch the playlist data from the API
  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist'
      );
      const data = await response.json();
      setPlaylist(data);
      setCurrentSong(data[0]); // Set the first song as the currently playing song
    };

    fetchPlaylist();
  }, []);

  // Handle changing the current song
  const handleSongChange = (song: Song) => {
    setCurrentSong(song);
  };

  return (
    <div className="music-player flex flex-col md:flex-row justify-between gap-8">
      {/* Currently Playing Section */}
      <div className="w-[426px] h-[1043px] md:w-[436px] md:h-[662px]">
        {currentSong && <CurrentlyPlaying song={currentSong} />}
      </div>

      {/* Playlist Section */}
      <div className="w-[426px] h-[1043px] md:w-[481px] md:h-[662px] bg-[#FFE3FD]">
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
