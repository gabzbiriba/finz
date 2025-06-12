
# 💸 Finz - Gerenciador de Despesas

Finz é uma aplicação web desenvolvida em React para controle de receitas e despesas pessoais. Com uma interface intuitiva e responsiva, permite acompanhar suas transações, visualizar resumos financeiros e analisar seus gastos por categoria.

**Desenvolvido por:** 
Gabrielle Arruda Rodrigues (2312130129)

**Disciplina:** 
Tecnologias Web

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
- Estilização com cores personalizadas

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
git clone https://github.com/gabzbiriba/finz.git
```

### 2. Abra o terminal e inicie o JSON Server

```bash
cd back
npx json-server db.json
```

### 3. Abra outro terminal e inicie o frontend

```bash
cd front
npm install
npm run dev
```