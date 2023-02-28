import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../../styles/APOD.module.css';


const APOD = () => {
	const [data, setData] = useState(null);
	const fetchData = async () => {	
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
    .then((response) => {
      var fetchedData = response.data;
      console.log(fetchedData + " => " + typeof(fetchedData));
      setData(fetchedData);
      localStorage.setItem("LandingPage_data" , fetchedData);
      localStorage.setItem("LandingPage_time" , Date.now());
    })
    .catch((err)=>{
        console.log(" cant get requ")
      console.log(err);
    })

	};

  useEffect(() => {
    if(localStorage.getItem("LandingPage_data")){
      var data = localStorage.getItem("LandingPage_data");
      setData(data);
    }
    else{
      fetchData();
    }
    // localStorage.clear();
},[]);
	return (
		<div className={styles.container}>
            <div  className={styles.left}>
                {/* {console.log("dtaa is :" + data)}
                <img src={data.hdurl} alt="" /> */}
            </div>

            <div className={styles.right}>

            </div>
            
		</div>
	);
}    

export default APOD;