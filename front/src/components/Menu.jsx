import { useContext } from "react";
import {RotaContext} from "../contexts/RotaContext.jsx"

function Menu() {

    const {setRota} = useContext(RotaContext);

    const handleNavegar = (rota) => (e) => {
        e.preventDefault();
        setRota(rota);
    };

    return (
        <nav>
            <ul>
                <li>
                    <button onClick={handleNavegar("/listar")}>Transações</button>
                </li>
                <li>
                    <button onClick={handleNavegar("/nova")}>Nova Transação</button>
                </li>
                <li>
                    <button onClick={handleNavegar("/dashboard")}>Resumo</button>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;