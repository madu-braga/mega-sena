import { useEffect, useState } from "react";
import { Acumulado } from "../components/Acumulado";
import { Cabecalho } from "../components/Cabecalho";
import { Carregando } from "../components/Carregando";
import { Estimativa } from "../components/Estimativa";
import { Local } from "../components/Local";
import { Numeros } from "../components/Numeros/index.";
import service from "../services"
import { Props } from "../types";

export default function Principal() {

  const [concurso, setConcurso] = useState({} as Props) 

    useEffect (
       function() {
            (async function() {
                const numero = Math.floor(Math.random() * 2533)
                const concurso: Props = await service.get(numero)
                console.log(concurso)
                setConcurso(concurso)
            })()
            
       }, 
       []
    )

  return (
    <>
      {!concurso.numero ? <Carregando /> : (
          <>
            <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
            { concurso.acumulado && <Acumulado /> } 
            <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio}/>
            <Numeros listaDezenas={concurso.listaDezenas} />
            <Estimativa dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso} />
          </>
      )}
    </>
  )
}
