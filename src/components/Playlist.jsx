import React from 'react';
import PlayListItem from './PlayListItem';

const playlistItems = [
  { title: "Pink Pony Club", genre: "Pop", length: "3:58" },
  { title: "Casual", genre: "Indie Pop", length: "4:07" },
  { title: "Naked in Manhattan", genre: "Pop", length: "3:35" },
  { title: "Red Wine Supernova", genre: "Indie Pop", length: "3:48" },
  { title: "Love Me Anyway", genre: "Pop", length: "4:10" },
  { title: "My Kink is Karma", genre: "Pop", length: "3:57" },
  { title: "Femininomenon", genre: "Pop", length: "2:54" },
  { title: "Californian", genre: "Indie Pop", length: "3:12" },
  { title: "Hot To Go!", genre: "Pop", length: "2:45" },
  { title: "Kaleidoscope", genre: "Pop", length: "3:28" }
];

const Playlist = () => {
  return (
    <div className="playlist w-[426px] h-[1043px] md:w-[481px] md:h-[662px]">
      {playlistItems.map((item, index) => (
        <PlayListItem
          key={index}
          title={item.title}
          genre={item.genre}
          length={item.length}
        />
      ))}
    </div>
  );
};

export default Playlist;
