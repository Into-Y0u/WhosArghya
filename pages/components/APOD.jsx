import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/APOD.module.css';

const APOD = () => {
  const [pic, setPic] = useState("/");
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState("");
  const [hdurl, setHdurl] = useState("");


	const fetchData = async () => {	
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=g2SE3zMqKGOohHR8XgRuxx0j2p6xzrKfcGYQE3fn`)
    .then((response) => {
      var fetchedData = response.data;
      setDate(fetchedData.date);
      setTitle(fetchedData.title);
      setDesc(fetchedData.explanation);
      if(fetchedData.media_type === "video"){
        setPic("content/noImg.png");
      }
      else{
        setPic(fetchedData.url);
        setHdurl(fetchedData.hdurl);
      }
    })
    .catch((err)=>{
      console.log(err);
    })

	};

  useEffect(() => {
    fetchData();
  },[]);
  // localStorage.clear();
	return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.containerTitle}>APOD</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <img src={pic} alt="Kindly Click the full size link given bottom right corner" />
        </div>

        <div className={styles.right}>
          <h1>{title}</h1>
          <h3>-{date}-</h3>
          <p>{desc}</p>

          <button>
            <Link href={hdurl}  passHref>
                  <a target="_blank">Watch Full Size</a>
            </Link>
            
          </button>
        </div>
      </div>
    </div>
	);
}    

export default APOD;