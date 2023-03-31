import React from 'react'
import {useQuery} from 'react-query';
// import jokes from '../config/config';
import { Box } from '@mui/system';
import axios from 'axios' ;
import './jokes.css';

const Jokess = () => {
    const{isLoading,error,data}= useQuery("dogs", ()=> axios("https://random.dog/woof.json")
    );
    console.log (data)

   

    if (isLoading){
        return <p> loading.... </p>
    }
    if(error){
        return<p>error! {error}</p>
    }
  return (
    <Box className='data' >
        {/* <h1>imdb</h1>
        {
            data.data.d.map((datas)=>(
                <div key={datas}>
                    <p>{[datas.i]}</p>
                </div>
            ))
        }
        */}
        <img src={data.data.url} />

    </Box>
  )
}

export default Jokess