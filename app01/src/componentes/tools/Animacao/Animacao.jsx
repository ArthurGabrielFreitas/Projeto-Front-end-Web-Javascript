import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

function Animacao({css_identifier, delayAttr = 0, rotation = 180, rotateAxis = 'z', duration = 700}) {
    useEffect(() => {
        ScrollReveal({reset:false}).reveal(`.${css_identifier}`, {
            delay: delayAttr, 
            duration: duration,
            scale:0.1,
            easing: 'ease-in',
            rotate: {
              [rotateAxis]: rotation
            }
        });
    },[]);

  return (
    <></>
  )
}

export default Animacao