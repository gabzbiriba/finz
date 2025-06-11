import { useContext, useState } from "react";
import { adicionar } from "../services/TransacaoService";
import { RotaContext } from "../contexts/RotaContext";
import Formulario from "./Formulario.jsx";

function Nova() {
  const { setRota } = useContext(RotaContext);
  const [erro, setErro] = useState("");
  const [transacao, setTransacao] = useState({
    descricao: "",
    valor: "",
    tipo: "receita",
    categoria: "",
    data: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransacao((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resposta = await adicionar(transacao);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <main>
      <h2>Nova Transação</h2>
      {erro && <p>{erro}</p>}
      <Formulario transacao={transacao} onChange={handleChange} onSubmit={handleSubmit} />
    </main>
  );
}

export default Nova;