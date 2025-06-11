import Menu from "./Menu.jsx"

function Cabecalho () {
    return (
        <header>
            <img src="./LogoBranca.png"/>
            <h1>Finz - Gerenciador de Despesas</h1>
            <Menu/>
        </header>
    );
}

export default Cabecalho;