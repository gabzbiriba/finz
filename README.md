
# 💸 Finz - Gerenciador de Despesas

Finz é uma aplicação web desenvolvida em React para controle de receitas e despesas pessoais. Com uma interface intuitiva e responsiva, permite acompanhar suas transações, visualizar resumos financeiros e analisar seus gastos por categoria.

**Desenvolvido por:** Gabrielle Arruda Rodrigues (2312130129)                                                                             **Disciplina:** Tecnologias Web

---

## 🚀 Funcionalidades

✅ **Cadastro de Transações**
- Descrição
- Valor (positivo)
- Tipo: Receita ou Despesa
- Categoria (ex: Alimentação, Saúde, Transporte, etc.)
- Data (padrão: data atual)
- Validações completas em todos os campos

📄 **Listagem de Transações**
- Tabela com todas as transações
- Ações: Editar e Excluir
- Filtro por descrição (busca dinâmica)
- Responsiva (modo card para mobile)

📊 **Resumo (Dashboard)**
- Total de receitas, despesas e saldo
- Gráfico de pizza com os gastos por categoria (Chart.js)
- Atualização automática a cada transação

🧭 **Navegação**
- Menu com acesso às páginas:
  - Resumo
  - Transações
  - Nova Transação

🎨 **Responsividade**
- Layout adaptado para celular, tablet e desktop
- Tabela reestruturada como cards no mobile
- Estilização com cores personalizadas (#7ed957 e #1e0b00)

---

## 🛠️ Tecnologias

- React
- Context API
- JSON Server (mock da API REST)
- Chart.js + react-chartjs-2
- CSS puro (com media queries responsivas)

---

## ⚙️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/finz.git
cd finz
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o JSON Server

```bash
npx json-server --watch db.json --port 3001
```

> A API será exposta em: `http://localhost:3001/transacoes`

### 4. Inicie o frontend

```bash
npm start
```

> A aplicação será executada em: `http://localhost:3000`