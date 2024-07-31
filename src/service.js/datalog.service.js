import { api } from "./api.service";

export const saveDataLog = async (data) => {
  try {
    const response = await api.post(`/system/data_log/save_data_log`, data);
    return response;
  } catch (error) {
    console.log("saveDataLog in service/system.service.js error : ", error);
    return error;
  }
};

export const getDataLog = async (data) => {
  try {
    const response = await api.post(`/system/data_log`, data);
    return response;
  } catch (error) {
    console.log("getDataLog in service/system.service.js error : ", error);
    return error;
  }
};
