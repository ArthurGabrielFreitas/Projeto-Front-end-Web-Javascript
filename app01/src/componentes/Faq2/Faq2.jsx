import React, { useEffect, useState } from 'react'

function Faq2() {
    const url = "https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faq2.json";

    const [faqs, setFaqs] = useState([]);

    useEffect(() => { lerFaq() }, []);

    async function lerFaq() {
        const response = await fetch(url);
        const faqsServidor = await response.json();
        setFaqs(faqsServidor.faqs);
    }

    return (
        <>
            {faqs.length === 0 ? (
                <p>Carregando, aguarde...</p>
            ) : (
                faqs.map((faq, indice) => {
                    return (
                        <details key={indice}>
                            <summary>{faq.pergunta}</summary>
                            <p>{faq.resposta}</p>
                        </details>
                    )
                })
            )}
        </>
    )
}

export default Faq2