import React, { useState } from 'react'
import style from './Formulario.module.css'
import emailjs from '@emailjs/browser';

function Formulario() {

  const [form, setForm] = useState({
    nome: '',
    email: '',
    msg: ''
  });

  const [msgErro, setMsgErro] = useState("");

  function alterarForm(e) {
    setForm({...form, [e.target.name]: e.target.value})

    if (form.nome != '' && form.email != '' && form.msg != '') {
      setMsgErro("")
    }
  }

  function validar(e) {
    e.preventDefault();

    if (form.nome == '' || form.email == '' || msg == '') {
      setMsgErro("Todos os campos devem ser preenchidos")
    } else {
      var templateParams = {
        from_name: form.nome,
        from_email: form.email,
        from_msg: form.msg
      };
      
      emailjs.send('servico', 'template', templateParams, 'api_key').then(
        (response) => {
          setMsgErro("Email enviado com sucesso");
        },
        (error) => {
          setMsgErro("Não foi possível enviar o e-mail");
        },
      );
    }
  }

  return (
    <>
        <form className={style.form} onSubmit={validar}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id='nome' name='nome' onChange={alterarForm}/>
            
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' onChange={alterarForm}/>
            
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id='msg' name='msg' onChange={alterarForm}/>

            <button type='submit'>Enviar</button>
            <p>{msgErro}</p>
        </form>
    </>
  )
}

export default Formulario