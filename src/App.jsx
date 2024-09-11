import React from 'react';
import MusicPlayer from './MusicPlayer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
