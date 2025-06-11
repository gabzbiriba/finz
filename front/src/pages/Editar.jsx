import { useContext, useEffect, useState } from "react";
import { buscarPorId, modificar } from "../services/TransacaoService";
import { RotaContext } from "../contexts/RotaContext";
import Formulario from "./Formulario.jsx";

function Editar() {
  const { rota, setRota } = useContext(RotaContext);
  const [erro, setErro] = useState("");
  const [transacao, setTransacao] = useState({});

  const id = rota.replace("/editar/", "");

  useEffect(() => {
    const carregar = async () => {
      const resposta = await buscarPorId(id);
      if (resposta.sucesso) {
        setTransacao(resposta.dados);
        setErro("");
      } else {
        setErro(resposta.mensagem);
      }
    };
    carregar();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransacao((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resposta = await modificar(id, transacao);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <main>
      <h2>Editar Transação</h2>
      {erro && <p>{erro}</p>}
      <Formulario transacao={transacao} onChange={handleChange} onSubmit={handleSubmit} />
    </main>
  );
}

export default Editar;