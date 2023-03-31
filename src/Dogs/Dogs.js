import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query';
import'./dog.css'

const Dogs = () => {
    const{isLoading,error,data}= useQuery("dogs",()=> axios("https://random.dog/woof.json")

);
console.log(data)
if (isLoading){
    return<h1>loading.......</h1>
}
if (error){
    return<h1> error!</h1>
}
   
  return (
    <>
    
    <div className='dog' >
        <h1>Dog Images</h1>
        <img src={data.data.url} />
    </div>
    </>

  )
}

export default Dogs