import { HTMLAttributes } from "react"
import { NumeroSld, NumerosSld } from "./styles"

type Props = HTMLAttributes<HTMLElement> & {
    listaDezenas: string[]
}

export function Numeros({ listaDezenas }: Props) {
    return (
        <NumerosSld>
            {listaDezenas.map((n) => (
                <NumeroSld key={n}>{n}</NumeroSld>
            ))}
        </NumerosSld>
    )
}