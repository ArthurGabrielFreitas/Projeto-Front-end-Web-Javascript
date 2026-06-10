import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Whatsapp() {
  return (
    <>
        <FloatingWhatsApp
        phoneNumber="5531999999999"
        accountName="Suporte"
        chatMessage="Olá! Como podemos ajudar?"
        placeholder="Digite sua mensagem..."
        statusMessage="Normalmente responde em poucos minutos"
        allowClickAway
        notification
        notificationSound
      />
    </>
  )
}

export default Whatsapp