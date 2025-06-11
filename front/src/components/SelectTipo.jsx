function SelectTipo({ value, onChange }) {
  return (
    <div>
      <label htmlFor="tipo">Tipo</label>
      <select id="tipo" name="tipo" value={value} onChange={onChange}>
        <option value="">Selecione</option>
        <option value="receita">Receita</option>
        <option value="despesa">Despesa</option>
      </select>
    </div>
  );
}

export default SelectTipo;