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
    <main style={{ padding: "1rem" }}>
      <h2>Lista de Transações</h2>
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <div style={{ marginBottom: "1rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
        <label htmlFor="busca">🔍 Buscar por descrição:</label>
        <input
          id="busca"
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Ex: mercado"
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", minWidth: "200px" }}
        />
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Descrição</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Valor</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Tipo</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Categoria</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Data</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Ações</th>
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
                    <button onClick={() => handleEditar(t.id)} style={{ marginRight: "0.5rem" }}>
                      Editar
                    </button>
                    <button onClick={() => handleRemover(t.id)}>Remover</button>
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