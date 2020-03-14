import React, { useState } from "react";
import LandingInputTag from '../ScreenChips/screenChips';

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


const initialArray = shuffle(['Renta', 'Benito Juárez','Nuevo', 'Patrimonio para la familia', '2 Habitaciones', 'Recien Casados'])


export default function Tags() {
 const [array, setArray] = useState(initialArray)

  const selectedTags =(tags)=> {
    console.log(tags)
  }
  
  const handleClick = () => {
    setArray(shuffle(initialArray))
  } 

  return (
  <LandingInputTag
      handleClick={handleClick}
      tags={array}
      selectedTags={selectedTags}
    />
  );
}
