import { useContext } from "react";
import {RotaContext} from "./contexts/RotaContext.jsx";
import Cabecalho from "./components/Cabecalho.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Listar from "./pages/Listar.jsx";
import Nova from "./pages/Nova.jsx";
import Editar from "./pages/Editar.jsx";

function App() {

  const {rota} = useContext(RotaContext);

  return (
    <>
      <Cabecalho/>
      {rota === "/dashboard" && <Dashboard/>}
      {rota === "/listar" && <Listar/>}
      {rota === "/nova" && <Nova/>}
      {rota.startsWith("/editar") && <Editar/>}
    </>
  );
}

export default App;