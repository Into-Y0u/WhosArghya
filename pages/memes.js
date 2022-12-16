import React from 'react'
import axios from 'axios';
import Meme from './components/Meme';
import { useState,useEffect } from 'react';

const memes = () => {
    const [mydata, setMydata] = useState([]);
    const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
    const fetchData = async ()=>{

        try {
            const response = await axios.get(url);
            const arr = response.data.data.memes;
            console.log(arr);
            setMydata(arr);
        }catch(err){
            console.log(err);

        }

        // meme.map((ele) => {
        //     console.log("ele is  " + ele);
        // })
    }

    const print =() =>{
        console.log("my dtaa is " + mydata);
    }
    // useEffect(() => {
    //     fetchData();
    // })
    
  return (
    <div>
        <button onClick={fetchData} >Get Meme</button>
        <button onClick={print} >Get Meme</button>
        {
            mydata.map((ele) => (
                <Meme  data={ele} />
            ))
        }

    </div>
  )
}

export default memes