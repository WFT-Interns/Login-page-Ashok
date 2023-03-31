import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: '#f4049e',
       
    
      },
      success: {
        main: '#2a9461'
      }
    },
    typography: {
      fontSize: 16,
      h3: {
        fontWeight: 700,
        fontSize: '2.2rem'
      },
      h4: {
        fontWeight: 700,
        fontSize: '1.75rem'
      },
      h5: {
        fontWeight: 500
      },
      h6: {
        fontWeight: 500
      }
    },
    breakpoints :{
        values:{
            xs: 0,
            sm: 600,
             md: 900,
            lg: 1200,
            xl: 1536,

        }

    },
    MuiButton:{
      styleOverRide:{

        color:'red'
      }

    }
    
  })

  export default theme;