import Menu from "./Menu.jsx";

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-esquerda">
        <img src="./LogoBranca.png" alt="Logo" className="cabecalho-logo" />
        <div className="cabecalho-titulos">
          <h1>Finz</h1>
          <p>Gerenciador de Despesas</p>
        </div>
      </div>
      <Menu />
    </header>
  );
}

export default Cabecalho;