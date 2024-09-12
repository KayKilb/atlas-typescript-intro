//MusicPlayer.tsx
import React, { useEffect, useState, useCallback, useRef } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

interface Song {
  id: number;
  title: string;
  genre: string;
  length: string;
  artist: string;
  url: string; // Assuming each song has a URL for playback
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1); // Assuming volume is between 0 and 1
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const getPreviousSong = useCallback(() => {
    if (playlist.length === 0) return null;
    const currentIndex = currentSong ? playlist.findIndex(song => song.id === currentSong.id) : -1;
    const previousIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    return playlist[previousIndex];
  }, [playlist, currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSongChange = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true); // Optional: Start playing the selected song immediately
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    if (audioRef.current) {
      const handleEnded = () => {
        const nextSong = getNextSong();
        if (nextSong) {
          setCurrentSong(nextSong);
          setIsPlaying(true); // Start playing the next song immediately
        }
      };

      audioRef.current.addEventListener('ended', handleEnded);
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, [getNextSong]);

  return (
    <div className="music-player flex flex-col lg:flex-row gap-4 h-full max-w-7xl mx-auto p-4">
      {/* Currently Playing Section */}
      <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden relative min-h-[630px] lg:min-h-0">
        {currentSong && (
          <>
            <CurrentlyPlaying
              song={currentSong}
              onPlayPause={handlePlayPause}
              onBack={() => {
                const previousSong = getPreviousSong();
                if (previousSong) {
                  setCurrentSong(previousSong);
                  setIsPlaying(true); // Optional: Start playing the previous song immediately
                }
              }}
              onSkip={getNextSong} // Utilize the existing function
              isPlaying={isPlaying} // Pass the state variable
              volume={volume}
              onVolumeChange={handleVolumeChange} // Pass the volume change handler
              playlist={playlist}
            />
            <audio
              ref={audioRef}
              src={currentSong.url}
              // Ensure you handle other attributes as needed
            />
          </>
        )}
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