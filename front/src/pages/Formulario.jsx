import InputTexto from "../components/InputTexto.jsx";
import SelectTipo from "../components/SelectTipo.jsx";
import SelectCategoria from "../components/SelectCategoria.jsx";
import { useState, useEffect } from "react";

function Formulario({ transacao, onChange, onSubmit }) {
    
  const [erros, setErros] = useState({});

  const validar = () => {
     const novosErros = {};
        if (!transacao.descricao) novosErros.descricao = "Descrição obrigatória!";
        if (!transacao.valor || parseFloat(transacao.valor) <= 0) novosErros.valor = "Valor deve ser positivo!";
        if (!transacao.tipo) novosErros.tipo = "Tipo obrigatório!";
        if (!transacao.categoria) novosErros.categoria = "Categoria obrigatória!";
        if (!transacao.data) novosErros.data = "Data obrigatória!";
        return novosErros;
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validacao = validar();
    setErros(validacao);
    if (Object.keys(validacao).length === 0) {
      onSubmit(e);
    }
  };

  useEffect(() => {
    if (!transacao.data) {
      onChange({ target: { name: "data", value: new Date().toISOString().split("T")[0] } });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <InputTexto label="Descrição" name="descricao" value={transacao.descricao || ""} onChange={onChange} />
        {erros.descricao && <p>{erros.descricao}</p>}
      </div>
      <div>
        <InputTexto label="Valor" name="valor" type="number" value={transacao.valor || ""} onChange={onChange} />
        {erros.valor && <p>{erros.valor}</p>}
      </div>
      <div>
        <SelectTipo value={transacao.tipo || ""} onChange={onChange} />
        {erros.tipo && <p>{erros.tipo}</p>}
      </div>
      <div>
        <SelectCategoria value={transacao.categoria || ""} onChange={onChange} />
        {erros.categoria && <p>{erros.categoria}</p>}
      </div>
      <div>
        <InputTexto label="Data" name="data" type="date" value={transacao.data || ""} onChange={onChange} />
        {erros.data && <p>{erros.data}</p>}
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Formulario;