import React from 'react';
import { Grid, Box, makeStyles, ListItem, Typography, Button } from '@material-ui/core';
import LogoWitideal from '../../logoWitideal-negative.svg';
import facebook from '../../assets/facebook.png';


const useStyles = makeStyles(theme => ({

  container: {
    backgroundColor: "#3F19F9",
    height: "100vh",
    color:"white",
   
  },
 
  spacingtop: {
    marginTop: 100,
  },

  img: {
    marginLeft: 10,
    width: 50,
    [theme.breakpoints.down('sm')]: {
      width: 40,
    }
  },
  colorWdGreen:{
    color: '#32FFD2',
    fontWeight: "600"
  },
  title:{
    fontSize:20,
    letterSpacing:1,
    fontWeight: "600"
  },
  imgLogo: {
    [theme.breakpoints.down('sm')]: {
      width: 150

    }
  },
  
 
}));



export default function TextLanding(props) {
  const classes = useStyles();


  return (
    <React.Fragment>
      <Box className={classes.container} p={{ xs: 3, md: 5 }} pl={{ md: 20 }} pr={{ md: 20 }}>
        <Grid container justify="center" alignItems="center" >
          <Grid item xs={12} md={12}>
            <Grid container justify="space-between">
              <Grid item >
                <img className={classes.imgLogo}src={LogoWitideal} />
              </Grid>
              <Grid item >
              <a href="https://www.facebook.com/pages/category/Software-Company/Witideal-100558841331747/" alt="instagram"><img src={facebook} className={classes.img} /></a>
                <img  alt="instagram"className={classes.img} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={classes.spacingtop} spacing={6}>
              <Grid item xs={12}>
                <Typography variant="body2" className={classes.title}>{props.title}</Typography>
                <Typography variant="h2" className={classes.colorWdGreen}>está apunto de cambiar...</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography className={classes.title}>
                PRÓXIMAMENTE &nbsp; <span className={classes.colorWdGreen}>ABRIL 2020</span>
                </Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Box>
    </React.Fragment>


  )

}
