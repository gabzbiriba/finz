import { useEffect, useState } from "react";
import { buscarTodas } from "../services/TransacaoService";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [transacoes, setTransacoes] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const carregar = async () => {
      const resposta = await buscarTodas();
      if (resposta.sucesso) {
        setTransacoes(resposta.dados);
        setErro("");
      } else {
        setErro(resposta.mensagem);
      }
    };
    carregar();
  }, []);

  const totalReceitas = transacoes
    .filter((t) => t.tipo === "receita")
    .reduce((soma, t) => soma + parseFloat(t.valor), 0);

  const totalDespesas = transacoes
    .filter((t) => t.tipo === "despesa")
    .reduce((soma, t) => soma + parseFloat(t.valor), 0);

  const saldo = totalReceitas - totalDespesas;

  const categorias = {};
  transacoes.forEach((t) => {
    if (t.tipo === "despesa") {
      categorias[t.categoria] = (categorias[t.categoria] || 0) + parseFloat(t.valor);
    }
  });

  const chartData = {
    labels: Object.keys(categorias),
    datasets: [
      {
        label: "Despesas por Categoria",
        data: Object.values(categorias),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffcd56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40"
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <main>
      <h2>Resumo Financeiro</h2>
      {erro && <p>{erro}</p>}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
        <div style={{ background: "#d1e7dd", padding: "1rem", borderRadius: "8px", flex: 1 }}>
          <h3>Receitas</h3>
          <p>R$ {totalReceitas.toFixed(2)}</p>
        </div>
        <div style={{ background: "#f8d7da", padding: "1rem", borderRadius: "8px", flex: 1 }}>
          <h3>Despesas</h3>
          <p>R$ {totalDespesas.toFixed(2)}</p>
        </div>
        <div style={{ background: "#cff4fc", padding: "1rem", borderRadius: "8px", flex: 1 }}>
          <h3>Saldo</h3>
          <p>R$ {saldo.toFixed(2)}</p>
        </div>
      </div>

      <div style={{ marginTop: "2rem", maxWidth: "500px"}}>
        <h3>Gráfico de Despesas por Categoria</h3>
        <Doughnut data={chartData} />
      </div>
    </main>
  );
}

export default Dashboard;