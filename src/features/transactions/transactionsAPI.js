import { instance } from "../../utils/axios";

export const getTransactions = async () => {
  const response = await instance.get("/transactions");
  return response.data;
};

export const addTransaction = async (data) => {
  const response = await instance.post("/transactions", data);
  return response.data;
};

export const editTransaction = async (id, data) => {
  const response = await instance.put(`/transactions/${id}`, data);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await instance.delete(`/transactions/${id}`);
  return response.data;
};
