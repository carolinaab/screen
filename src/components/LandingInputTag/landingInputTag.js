import React from 'react';
import { Grid, Box, makeStyles, TextField, InputAdornment, ListItem, Typography, Button } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from '@material-ui/icons/Search';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

const logoWitideal = 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/assets%2Fbranding%2Fthumb%40logo_witideal_h.svg?alt=media&token=a006c6ac-f594-4557-b3ec-d8b38e8e3e92'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#F7F6FF",
    height: "100vh"
  },
  tag: props => ({
    textAlign: "center",
    height: 40,
    color: "white",
    padding: 8,
    fontSize: 14,
    listStyle: "none",
    borderRadius: 100,
    marginRight: 8,
    background: "#3F19F9",
    width: "auto"
  }),
  input: {

    '& ::placeholder': {
      color: "#3F19F9",
      fontSize: 17,
      fontWeight: "bold"
    },
    '& .MuiOutlinedInput-root': {
      height: 40,
      color: "#3F19F9",
      backgroundColor:"#E8E5FD",
      borderRadius:100,

      '& fieldset': {
        borderColor: 'white',
      
      },
      '&:hover fieldset': {
        border: '2px solid white',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #32FFD2',
      },
    }
  },
  spacingtop: {
    marginTop: 100
  },
  icon: {
    color: "#3F19F9"
  },
  img: {
    marginLeft: 10,
    width:45

  },
  containerInputTag: {
    height: 200,
    overflow: "auto",
    //paddingTop: 10
  },
  clearIcon: {
    color: "#32FFD2"
  }
}));



export default function Inputs(props) {
 


  const classes = useStyles();

  const [tags, setTags] = React.useState(props.tags);
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = event => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <React.Fragment>
      <Box className={classes.container} p={{ xs: 3, md: 5 }} pl={{ md: 20 }} pr={{ xs: 2, md: 10 }}>
        <Grid container justify="center" alignItems="center" >
          <Grid item xs={12} md={12}>
            <Grid container justify="space-between">
              <Grid item >
                <img src={logoWitideal} />
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
                  <TextField
                    className={classes.input}
                    placeholder="Descubre tu lugar"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon className={classes.icon} />
                        </InputAdornment>
                      )
                    }}
                    onKeyUp={event => (event.key === "Enter" ? addTags(event) : null)}
                    variant="outlined"
                  >
                  </TextField>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Box>
    </React.Fragment>


  )

}





