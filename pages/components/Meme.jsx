import React from 'react'

const Meme = ({data}) => {
    console.log("data is : "+ data);
  return (
    <div>
        <div>
            <h3>{data.name}</h3>
            <img key={data.id}  src={data.url} alt=""  />
        </div>
    </div>
  )
}

export default Meme