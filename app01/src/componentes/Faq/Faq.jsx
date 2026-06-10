import React, { useEffect, useState } from 'react'

function Faq() {
    const [nome, setNome] = useState("");

    function mudarNome(e) {
        setNome(e.target.value);
    }

    useEffect(() => {
        console.log("po")
    }, []);

    return (
        <>
            <section className='faq'>
                <form action="">
                    <label htmlFor="">Nome</label>
                    <input type="text" id='' placeholder='Digite sua pergunta' onChange={mudarNome}/>
                </form>
                <p>{nome}</p>
            </section>
        </>
    )
}

export default Faq