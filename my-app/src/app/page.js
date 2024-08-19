"use client";
import React, { useState } from "react";

import styles from "./page.module.css";

const tracks = [
  {
    id: 1,
    title: "All My Exes Live In Texas",
    artist: "George Strait",
    image: "/images/gs.webp",
  },
  {
    id: 2,
    title: "Georgia On My Mind",
    artist: "Willie Nelson",
    image: "/images/wn.jpeg",
  },
  {
    id: 3,
    title: "Waymore's Blues",
    artist: "Waylon Jennings",
    image: "/images/wj.webp",
  },
  {
    id: 4,
    title: "The Valley",
    artist: "Charley Crockett",
    image: "/images/cc.jpg",
  },
];

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState({ ...tracks[0] });
  const [showPlay, setShowPlay] = useState(true);

  const handleClick = (action) => {
    const lastItem = tracks.length;

    //FORWARD
    if (action === "forward") {
      if (selectedTrack.id === lastItem) {
        setSelectedTrack({ ...tracks[0] });
      } else {
        setSelectedTrack({ ...tracks[selectedTrack.id] });
      }
      //REWIND
    } else if (action === "rewind") {
      if (selectedTrack.id === 1) {
        setSelectedTrack({ ...tracks[3] });
      } else {
        let id = selectedTrack.id - 2;
        setSelectedTrack({ ...tracks[id] });
      }
    }
    //STOP & PLAY
    else if (action === "play") {
      setShowPlay(false);
    } else {
      setShowPlay(true);
    }
  };

  return (
    <div className={styles.root}>
      {tracks.map((item, i) => (
        <div
          key={i}
          className={i === selectedTrack.id - 1 ? styles.bordered : ""}
          style={{ margin: "12px 0" }}
        >
          {item.title} by {item.artist}
        </div>
      ))}
      <div>
        <span onClick={() => handleClick("rewind")} className={styles.btn}>
          REWIND
        </span>
        {showPlay ? (
          <span onClick={() => handleClick("play")} className={styles.btn}>
            PLAY
          </span>
        ) : (
          <span onClick={() => handleClick("stop")} className={styles.btn}>
            STOP
          </span>
        )}
        <span onClick={() => handleClick("forward")} className={styles.btn}>
          FORWARD
        </span>
      </div>
    </div>
  );
}
