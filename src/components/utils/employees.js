import axios from "axios";

export const getEmployees = () => {
  return axios.get("https://wbtech.onrender.com/");
};

export const addEmployees = (payload) => {
  return axios.post("https://wbtech.onrender.com/", payload);
};

export const updateEmployees = (id, payload) => {
  return axios.patch(`https://wbtech.onrender.com/${id}`, payload);
};

export const deleteEmployees = async (id) => {
  return await axios.delete(`https://wbtech.onrender.com/${id}`);
};
