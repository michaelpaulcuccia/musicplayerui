"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const tracks = [
  {
    id: 1,
    title: "All My Exes Live In Texas",
    artist: "George Strat",
  },
  {
    id: 2,
    title: "Georgia On My Mind",
    artist: "Willie Nelson",
  },
  {
    id: 3,
    title: "Waymore's Blues",
    artist: "Waylon Jennings",
  },
  {
    id: 4,
    title: "The Valley",
    artist: "Charley Crockett",
  },
];

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState({ ...tracks[0] });
  console.log(selectedTrack);

  const handleClick = (action) => {
    console.log(action);
  };

  return (
    <div className={styles.track}>
      {tracks.map((item, i) => (
        <div
          key={i}
          className={
            i + 1 === selectedTrack.id ? styles.bordered : styles.notBordered
          }
        >
          {item.title} by {item.artist}
        </div>
      ))}
      <div>
        <span onClick={() => handleClick("rewind")} className={styles.btn}>
          REWIND
        </span>
        <span onClick={() => handleClick("play")} className={styles.btn}>
          PLAY
        </span>
        <span onClick={() => handleClick("forward")} className={styles.btn}>
          FORWARD
        </span>
      </div>
    </div>
  );
}
