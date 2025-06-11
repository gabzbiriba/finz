import axios from "axios";

const url = import.meta.env.VITE_API_URL;

const buscarTodas = () => {
  return axios.get(url)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao buscar despesas" }));
};

const buscarPorId = (id) => {
  return axios.get(`${url}/${id}`)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao buscar despesa" }));
};

const adicionar = (despesa) => {
  return axios.post(url, despesa)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao adicionar despesa" }));
};

const modificar = (id, despesa) => {
  return axios.put(`${url}/${id}`, despesa)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao modificar despesa" }));
};

const remover = (id) => {
  return axios.delete(`${url}/${id}`)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao remover despesa" }));
};

export { buscarTodas, buscarPorId, adicionar, modificar, remover };