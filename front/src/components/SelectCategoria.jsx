function SelectCategoria({value, onChange}) {
    return (
        <div>
            <label htmlFor="categoria">Categoria</label>
            <select id="categoria" name="categoria" value={value} onChange={onChange}>
                <option value="">Selecione</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Educação">Educação</option>
                <option value="Lazer">Lazer</option>
                <option value="Moradia">Moradia</option>
                <option value="Saúde">Saúde</option>
                <option value="Transporte">Transporte</option>
                <option value="Vestuário">Vestuário</option>
                <option value="Outros">Outros</option>
            </select>
        </div>
    );
}

export default SelectCategoria;