import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

function Animacao({css_identifier, delayClasse = 0}) {
    useEffect(() => {
        ScrollReveal({reset:false}).reveal(`.${css_identifier}`, {
            delay: delayClasse, 
            duration: 700,
            scale:0.1,
            easing: 'ease-in'
        });
    },[]);

  return (
    <></>
  )
}

export default Animacao