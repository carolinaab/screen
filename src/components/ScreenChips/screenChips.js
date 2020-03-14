import React from 'react';
import { Grid, Box, makeStyles, ListItem, Typography, Button } from '@material-ui/core';
import LogoWitideal from '../../logoWitideal-negative.svg';
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from '@material-ui/icons/Search';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';


const useStyles = makeStyles(theme => ({

  container: {
    backgroundColor: "#3F19F9",
    height: "100vh"
  },
  tag:{
    textAlign: "center",
    height: 40,
    color: "#3F19F9",
    padding: 8,
    fontSize: 14,
    listStyle: "none",
    borderRadius: 100,
    marginRight: 8,
    background: "#FFFF",
    width: "auto"
  },
  button:{
  border: "1px solid #32FFD2",
  borderRadius:100,
  padding:'10px 20px 10px 20px',
  textTransform:"none",
  color:"white",
  fontSize:15
  },
  spacingtop: {
    marginTop: 100
  },
  
  img: {
    marginLeft: 10,
    width:50
  },
  containerInputTag: {
    height: 200,
    overflow: "auto",
    //paddingTop: 10
  },
  clearIcon: {
    color: props => props.color
  }
}));



export default function Inputs(props) {
  const classes = useStyles();

  const [tags, setTags] = React.useState(props.tags);
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };



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
          <Grid item xs={12} md={12}>
            <Grid container className={classes.spacingtop}>
              <Grid item xs={8}>
                <Grid container
                  alignItems="flex-start"
                  wrap="wrap"
                  spacing={2}
                  className={classes.containerInputTag}>
                  {tags.map((tag, index) => (
                    <ListItem key={index} className={classes.tag}>
                      <ClearIcon
                        className={classes.clearIcon}
                        fontSize="small"
                        onClick={() => removeTags(index)} />
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
                      <SearchIcon className={classes.clearIcon}/>
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







