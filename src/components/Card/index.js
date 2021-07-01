import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [valor, setValor] = useState(0)

    function Adicionar() {
        setValor(valor + 1);
    }

    function Remover() {
        setValor(valor - 1);
    }

    return (
        <div 
            className="card">
            <div 
                className="card-header">
                Meu primeiro card
            </div>
            <div 
                className="card-body">
                <Button
                    className="btn btn-success m-3"
                    onClick={ Adicionar }>
                    Adicionar
                </Button>
                <Button
                    className="btn btn-danger m-3"
                    onClick={ Remover }>
                    Remover
                </Button>
                <p 
                    className="card-text m-3">
                        {valor}
                </p>
            </div>
        </div>
    )
}

export default Card;