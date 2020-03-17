import React, { useState } from "react";
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.svg';
import LogoWitideal from '../../logoWitideal-negative.svg';
import { Grid, Box, makeStyles, ListItem, Typography, Button } from '@material-ui/core';
import ScreenChips from '../ScreenChips/screenChips';
import TextScreen from '../TextScreen/textScreen';


const useStyles = makeStyles(theme => ({

  container: {
    backgroundColor: "#3F19F9",
    minHeight: '100vh',
   color: "white",
   width:'100vw'
  },
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
      height: 38,
      paddingTop: 10
    }
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
 
  clearIcon: {
    color: "#32FFD2",
    marginRight: 5
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


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;


  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;


    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return [...array];
}

const arrayPromoter = ['Renta', 'Benito Juárez', 'Nuevo', 'Patrimonio para la familia', '3Habitaciones', 'Del Valle']
const arrayPromoterSecond = ['2 Habitaciones', 'Recien Casados', 'Pet Friendly', 'Me quiero independizar', 'Condesa ', 'Amueblado']

const arrayUser = ['Vender Terreno', 'Baja inversión', 'Rapidez', 'Agendar Cita', 'Mayor Ganancia']
const arrayUserSecond = ['Tu Inmueble', 'Optimizacón de Recursos', 'Venta en Línea', 'Primeros Lugares', 'Calidad']


//console.log(newArray)

export default function Principal() {

  const classes = useStyles();

  let bothArray = [arrayPromoter, arrayUser]
  bothArray = shuffle(bothArray)
  const newArray = shuffle(bothArray[0])
  const [array] = useState(newArray)
  const [render, setRender] = useState('button')

  //if (render !== 'button') return (<TextScreen title="La forma de vender y rentar inmuebles" />)


  // const newArray = array ? shuffle(arrayPromoter) : shuffle(arrayPromoter2)
  // console.log('newArray', newArray)


  const handleClick = () => {
    setRender('screen')
  }

  return (
    <React.Fragment>
      
      <Box className={classes.container} p={{ xs: 3, md: 5 }} pl={{ md: 20 }} pr={{ md: 20 }}>
        <Grid container justify="center" alignItems="center" >
          <Grid item xs={12} md={12}>
            <Grid container justify="space-between">
              <Grid item >
                <img className={classes.imgLogo} src={LogoWitideal} />
              </Grid>
              <Grid item >
                <a target="_blank"href="https://www.facebook.com/pages/category/Software-Company/Witideal-100558841331747/" alt="instagram"><img src={facebook} className={classes.img} /></a>
                <a target="_blank" href="https://www.instagram.com/witideal/"><img src={instagram} alt="instagram" className={classes.img} /></a>
              </Grid>
            </Grid>
          </Grid>
          {
            (render !== 'button')
              ?
              <TextScreen title="La forma de vender y rentar inmuebles" />
              :
              <ScreenChips
                tags={array}
                handleClick={handleClick}
              />
          }


        </Grid>

      </Box>
    </React.Fragment>




  );

}
