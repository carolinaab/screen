import React, { useState } from 'react';
import { Grid, Box, makeStyles, ListItem, Typography, Button } from '@material-ui/core';
import LogoWitideal from '../../logoWitideal-negative.svg';
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from '@material-ui/icons/Search';
import facebook from '../../assets/facebook.png';

const useStyles = makeStyles(theme => ({

  container: {
    backgroundColor: "#3F19F9",
    height: "100vh",
    color: "white"
  },
  tag: {

    height: 45,
    color: "#3F19F9",
    padding: 8,
    listStyle: "none",
    borderRadius: 100,
    marginRight: 8,
    background: "#FFFF",
    width: "auto",
    [theme.breakpoints.down('sm')]: {
      height: 38,
      paddingTop: 10
    }
  },
  button: {
    border: "1px solid #32FFD2",
    borderRadius: 100,
    padding: '10px 20px 10px 20px',
    textTransform: "none",
    color: "white",
    fontSize: 15,
    marginBottom: 5
  },
  spacingtop: {
    marginTop: 100
  },

  img: {
    marginLeft: 10,
    width: 50,
    [theme.breakpoints.down('sm')]: {
      width: 40,
    }
  },
  containerInputTag: {
    height: 200,
    overflow: "auto",
    paddingTop: 10,
    [theme.breakpoints.down('sm')]: {
      height: 250

    }
  },
  clearIcon: {
    color: "#32FFD2"
  },
  imgLogo: {
    [theme.breakpoints.down('sm')]: {
      width: 150

    }
  },
  colorWdGreen: {
    color: '#32FFD2'
  },
  title: {
    fontSize: 20,

  }
}));






export default function LandingInputTags(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.container} p={{ xs: 3, md: 5 }} pl={{ md: 20 }} pr={{ md: 20 }}>
        <Grid container justify="center" alignItems="center" >
          <Grid item xs={12} md={12}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item >
                <img className={classes.imgLogo} src={LogoWitideal} />
              </Grid>
              <Grid item >
                <a href="https://www.facebook.com/pages/category/Software-Company/Witideal-100558841331747/" alt="Facebook"><img src={facebook} className={classes.img} /></a>

                <img alt='Instagram' className={classes.img} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={classes.spacingtop}>
              <Grid item xs={12} md={10} >
                <Grid container
                  alignItems="flex-start"
                  wrap="wrap"
                  spacing={2}
                  className={classes.containerInputTag}>
                  {props.tags.map((tag, index) => (
                    <ListItem key={index} className={classes.tag} >
                      <ClearIcon
                        className={classes.clearIcon}
                        fontSize="small"
                      />
                      <Typography variant="body1">{tag}</Typography>
                    </ListItem>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.spacingtop}>
                  <Button
                    className={classes.button}
                    onClick={props.handleClick} >
                    <SearchIcon style={{ color: "white" }} />
                    Descubre tu lugar
                  </Button>
                </Grid>
              </Grid>

            </Grid>

          </Grid>
        </Grid>

      </Box>
    </React.Fragment>


  )

}







