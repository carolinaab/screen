import React, { useState } from 'react';
import { Grid, Box, makeStyles, ListItem, Typography, Button } from '@material-ui/core';

import ClearIcon from "@material-ui/icons/Clear";


const useStyles = makeStyles(theme => ({


  tag: {
    height: 50,
    color: "#3F19F9",
    padding: 10,
    listStyle: "none",
    borderRadius: 100,
    marginRight: 8,
    marginTop: 20,
    background: "#FFFF",
    width: "auto",
    [theme.breakpoints.down('sm')]: {
      height: 40,
      paddingTop: 10
    }
  },
  button: {
    border: "2px solid #32FFD2",
    borderRadius: 100,
    padding: '15px 25px 15px 25px',
    textTransform: "none",
    color: "white",
    fontSize: 20,

  },
  spacingtop: {
    marginTop: 100
  },


  containerInputTag: {
    margin: 3,
    paddingTop: 10,
    
  },
  clearIcon: {
    color: "#32FFD2",
    marginRight: 5
  },

  title: {
    fontSize: 20,

  }
}));



export default function ScreenChips(props) {

  const classes = useStyles();

  return (
    <Grid item xs={11} md={10} lg={7} >
      <Grid container className={classes.spacingtop} justify="center" alignItems="center">
        <Grid item xs={12} md={10} >
          <Grid container
            alignItems="left"
            wrap="wrap"
            spacing={3}
            className={classes.containerInputTag}>
            {props.tags.map((tag, index) => (
              <ListItem key={index} className={classes.tag} >
                <ClearIcon
                  className={classes.clearIcon}
                  fontSize="small"
                />
                <Typography variant="body1" className={classes.title}>{tag}</Typography>
              </ListItem>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={11} md={10} lg={7} >
          <Grid container justify="center" alignItems="center" className={classes.spacingtop}>
            <Button
              size="large"
              className={classes.button}
              onClick={props.handleClick} >
              Descubre tu lugar
            </Button>
          </Grid>
        </Grid>

      </Grid>

    </Grid>


  )

}







