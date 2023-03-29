import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import {Stack, TextField, Button} from '@mui/material';


export const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
     const [password, setpassword] = useState("");

     const [Entry, setEntry] = useState([]);
    
     const navigateWeather = ()=>{
        navigate("/Tempapp");
     };
     const submitForm = (input) => {
        input.preventDefault();

        const newEntry ={email, password};

        setEntry ([...Entry, newEntry]);

        setemail("");
        setpassword("");
     };
     const onClear = ()=>{
        setemail("");
        setpassword("");

     };
     const buttonSX ={
        color: "white",
        background:"black",
        "&:hover":{
            border: " 1px solid red",
            color: "blue",
            background:"yellow"
        }
     }
 

   
    return (
        <>
     <div className="container">
     <form action="">
        <Stack  >
           < TextField  sx ={{ margin:2}} label ="Email" size="small" type="text" value={email} id = "email" onChange={(e) => setemail (e.target.value)} />
           <TextField  sx={{margin:2}}  label ="Password" size="small" type="text" value={password} id = "password" onChange={(e) => setpassword (e.target.value)}  />
        </Stack >
         <Stack direction='row' spacing={2} >
         <Button  sx={buttonSX} variant='outlined' color='secondary' onClick={submitForm}>Submit</Button>
         <Button sx={buttonSX} variant='outlined'  id="btn1" onClick={onClear} >clear</Button>
         <Button sx={buttonSX} variant='outlined'  onClick={navigateWeather}>login</Button>
         </Stack>
      </form>
      
     </div>
      <div>
        {
            Entry.map((curElem) => {
                return(
                    <div className='showDataStyle'>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>

                    </div>

                )
            })
        }
      </div>
        </>
    )
}

export default Login