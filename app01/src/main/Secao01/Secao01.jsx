import React from 'react';
import TituloSecao from '../Comuns/TituloSecao/TituloSecao';
import Depoimentos from './Depoimentos/Depoimentos';

function Secao01() {
    return (
        <section>
            <TituloSecao subtitulo={"O que é"} descricao={"É isso e aquilo e aquilo"}/>
            <Depoimentos />
        </section>
    );
}

export default Secao01;