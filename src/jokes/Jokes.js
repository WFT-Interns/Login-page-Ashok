import React from 'react'
import {useQuery} from 'react-query';
import jokes from '../config/config';
import { Box } from '@mui/system';
import './jokes.css';

const Jokess = () => {
    const{isLoading,error,data}= useQuery(['jokes'],()=>
        jokes.get('/query')
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
        <h1>motorcycle</h1>
        {
            data.data.map((datas)=>(
                <div key={datas}>
                    <p>{[datas.Information]}</p>
                </div>
            ))
        }
       

    </Box>
  )
}

export default Jokess