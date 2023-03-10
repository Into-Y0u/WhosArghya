import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../../styles/APOD.module.css';


const APOD = () => {
	// const [data, setData] = useState(null);
  const [pic, setPic] = useState("");
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState("")

	const fetchData = async () => {	
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=g2SE3zMqKGOohHR8XgRuxx0j2p6xzrKfcGYQE3fn`)
    .then((response) => {
      var fetchedData = response.data;
      setDate(fetchedData.date);
      setPic(fetchedData.hdurl);
      setTitle(fetchedData.title);
      setDesc(fetchedData.explanation);
      console.log( JSON.stringify(fetchedData));
      
    })
    .catch((err)=>{
        console.log(" cant get requ")
      console.log(err);
    })

	};

  useEffect(() => {
    // if(localStorage.getItem("LandingPage_data")){
    //   var data = localStorage.getItem("LandingPage_data");
    //   setData(data);
    // }
    // else{
      fetchData();
    // }
    // localStorage.clear();
},[]);
	return (
		<div className={styles.container}>
            <div className={styles.left}>
              <img src={pic} alt="" />
            </div>

            <div className={styles.right}>
              <h1>{title}</h1>
              <h3>{date}</h3>
              <p>{desc}</p>
            </div>
            
		</div>
	);
}    

export default APOD;