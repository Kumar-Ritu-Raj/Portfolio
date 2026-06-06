import React from 'react';
import '../styles/Effects.css';

const BackgroundEffects: React.FC = () => (
  <div className="bg-effects" aria-hidden="true">
    <div className="bg-grid" />
    <div className="bg-orb bg-orb-1" />
    <div className="bg-orb bg-orb-2" />
    <div className="bg-orb bg-orb-3" />
    <div className="bg-noise" />
  </div>
);

export default BackgroundEffects;
