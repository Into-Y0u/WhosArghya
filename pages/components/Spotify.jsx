import React from 'react';
import Link from 'next/link';
import styles from '../../styles/APOD.module.css';


const Spotify = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.containerTitle}>Top 100 of 2023</h1>
      </div>

      <div className={styles.container}>
        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1Fa1IIVtEpGUcU?utm_source=generator" width="100%" height="352"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading='lazy'></iframe> */}
        <iframe
            className={styles.spotifyFrame}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1Fa1IIVtEpGUcU?utm_source=generator"
            width="100%"
            height="500"
            // style={{ borderRadius: '12px' }}
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
        >
        </iframe>

        {/* <div className={styles.left}>
          <img src={pic} alt="Kindly Click the full size link given bottom right corner" />
        </div>

        <div className={styles.right}>
          <h1>{title}</h1>
          <h3>-{date}-</h3>
          <p>{desc}</p>
        </div> */}
      </div>
    </div>
  )
}

export default Spotify