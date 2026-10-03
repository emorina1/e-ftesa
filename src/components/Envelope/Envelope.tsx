"use client";

import { useState } from "react";

type EnvelopeProps = {
  onOpen: () => void;
};

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <main className="envelope-page">

      <button
        className={`vertical-envelope ${isOpening ? "open" : ""}`}
        onClick={handleOpen}
        aria-label="Hap ftesën"
      >

        {/* pjesa bazë e zarfit */}
        <div className="envelope-base" />

        {/* letra që del nga zarfi */}
        <div className="vertical-letter">
          <p>YOU'RE</p>

          <h2>Cordially</h2>

          <h3>INVITED</h3>

          <span className="letter-decoration">❦</span>

          <small>TO CELEBRATE THE WEDDING OF</small>

          <strong>
            LEART
            <i>&</i>
            SARA
          </strong>

          <span className="letter-date">
            20 • 06 • 2027
          </span>
        </div>

        {/* kapaku i sipërm */}
        <div className="vertical-flap" />

        {/* pjesët e përparme */}
        <div className="vertical-left" />
        <div className="vertical-right" />
        <div className="vertical-bottom" />

        {/* vula */}
        <div className="vertical-seal">
          <div>
            <span>L</span>
            <small>&</small>
            <span>S</span>
          </div>
        </div>

        <p className="tap-envelope">
          TAP TO OPEN
        </p>

      </button>

    </main>
  );
}