import React, { useState } from "react";
import LandingInputTag from '../LandingInputTag/landingInputTag';
import TextLanding from '../TextLanding/textLanding'


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

const arrayPromoter = ['Renta', 'Benito Juárez', 'Nuevo', 'Patrimonio para la familia', '2 Habitaciones', 'Recien Casados', 'Pet Friendly', 'Me quiero independizar']
const arrayUser = ['Vender Terreno', 'Baja inversión', 'Rapidez', 'Agendar Cita', 'Mayor Ganancia', 'Tu Inmueble', 'Optimizacón de Recursos', 'Venta en Línea']

const newArray = shuffle(arrayPromoter)
//console.log(newArray)

export default function PrincipalLanding() {
  
  const [array] = useState(newArray)
  const [render, setRender] = useState('button')

  if (render !== 'button') return (<TextLanding title="La forma de vender y rentar inmuebles" />)


  // const newArray = array ? shuffle(arrayPromoter) : shuffle(arrayPromoter2)
  // console.log('newArray', newArray)


  const handleClick = () => {
    setRender('screen')
  }

  return (
    <LandingInputTag
      handleClick={handleClick}
      tags={array}
      title="la forma de comprar y rentar inmuebles"
    />
  );
}
