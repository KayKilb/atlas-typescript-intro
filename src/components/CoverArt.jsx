import React from 'react';

const CoverArt = ({ coverImage }) => {
  return (
    <div className="w-96 h-96">
      <img
        src={coverImage}
        alt="Cover Art"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default CoverArt;
