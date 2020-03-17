import React from 'react';
import { Grid,makeStyles,Typography} from '@material-ui/core';



const useStyles = makeStyles(theme => ({


  spacingtop: {
    marginTop: 100,
  },


  colorWdGreen: {
    color: '#32FFD2',
    fontWeight: "600",
    letterSpacing: 1.5,

  },
  title: {
    fontSize: 20,
    letterSpacing: 1.5,
    fontWeight: "600"
  },



}));



export default function TextScreen(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={12}>
      <Grid container className={classes.spacingtop} spacing={6}>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.title}>{props.title}</Typography>
          <Typography variant="h2" className={classes.colorWdGreen}>está a punto de cambiar...</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.title}>
            PRÓXIMAMENTE <br />
            <Typography variant="h4" className={classes.colorWdGreen}>ABRIL 2020</Typography>
          </Typography>
        </Grid>
      </Grid>

    </Grid>




  )

}
