import { useContext, useEffect, useState } from "react";
import { buscarTodas, remover } from "../services/TransacaoService";
import { RotaContext } from "../contexts/RotaContext";

function Listar() {
  const [transacoes, setTransacoes] = useState([]);
  const [erro, setErro] = useState("");
  const [busca, setBusca] = useState("");
  const { setRota } = useContext(RotaContext);

  const carregar = async () => {
    const resposta = await buscarTodas();
    if (resposta.sucesso) {
      setTransacoes(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const handleEditar = (id) => {
    setRota(`/editar/${id}`);
  };

  const handleRemover = async (id) => {
    const resposta = await remover(id);
    if (resposta.sucesso) {
      carregar();
    } else {
      setErro(resposta.mensagem);
    }
  };

  const transacoesFiltradas = transacoes.filter((t) =>
    t.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main>
      <h2>Lista de Transações</h2>
      {erro && <p className="erro-texto">{erro}</p>}

      <div className="campo-busca">
        <label htmlFor="busca">🔍 Buscar por descrição:</label>
        <input
          id="busca"
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Ex: mercado"
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {transacoesFiltradas.map((t) => (
              <tr key={t.id}>
                <td data-label="Descrição">{t.descricao}</td>
                <td data-label="Valor">R$ {t.valor}</td>
                <td data-label="Tipo">{t.tipo}</td>
                <td data-label="Categoria">{t.categoria}</td>
                <td data-label="Data">{t.data}</td>
                <td data-label="Ações">
                  <button onClick={() => handleEditar(t.id)} className="btn-acao">
                    Editar
                  </button>
                  <button onClick={() => handleRemover(t.id)} className="btn-acao">
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Listar;