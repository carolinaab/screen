import React from 'react';
import { Grid, Box, makeStyles, Typography } from '@material-ui/core';
import LogoWitideal from '../../logoWitideal-negative.svg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';



const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#3F19F9",
    height: "100vh"
  },
  containerLetters: {

    height: 250
  },
  img: {
    marginLeft: 10,
    width:45

  },
  subtitleText:{
    color:"white",
    letterSpacing:2,
    fontSize:25
  },
  title:{
    color:"#32FFD2",
    fontWeight:700,
  }
}));



export default function PrincipalLanding(props) {

  const classes = useStyles();



  return (
    <React.Fragment>
      <Box className={classes.container} p={{ xs: 3, md: 5 }} pl={{ md: 20 }} pr={{ md: 20 }}>
        <Grid container justify="center" alignItems="center" >
          <Grid item xs={12} md={12}>
            <Grid container justify="space-between">
              <Grid item >
                <img src={LogoWitideal} />
              </Grid>
              <Grid item >
                <img src={facebook} className={classes.img} />
                <img src={twitter} className={classes.img} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center" className={classes.containerLetters}>
              <Grid item xs={12}>
                <Typography className={classes.subtitleText} variant="h6">
                  La forma de comprar y rentar inmuebles 
            </Typography>
                <Typography className={classes.title}variant="h3">
                  está apunto de cambiar...
            </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" className={classes.containerLetters}>
              <Grid item xs={12}>
                <Typography className={classes.subtitleText} variant="subtitle2">
                  PRÓXIMAMENTE &nbsp; <span className={classes.title}>01-04-2020</span>
                </Typography>

              </Grid>
            </Grid>
          </Grid>

        </Grid>

      </Box>
    </React.Fragment>
  )

}




