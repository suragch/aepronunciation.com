import React from 'react';

export default function SimpleAudio({ src }) {
  return (
    <audio controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}