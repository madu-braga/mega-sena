import { HTMLAttributes } from "react";
import { DataEstimadaSld, EstimativaSld, PremioEstimadoSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    dataProximoConcurso: string,
    valorEstimadoProximoConcurso: number
}

export function Estimativa({ dataProximoConcurso, valorEstimadoProximoConcurso } : Props) {
    return (
        <EstimativaSld>
            <DataEstimadaSld>Estimativa de prêmio do próximo concurso {dataProximoConcurso}</DataEstimadaSld>  
            <PremioEstimadoSld>R$ {valorEstimadoProximoConcurso}</PremioEstimadoSld>
        </EstimativaSld>
    )
}