import { api } from "./api.service";

export const getFreeNameList = async (data) => {
  try {
    const response = await api.post(`/tariff/freeday/getFreeNameList`, data);
    return response;
  } catch (error) {
    console.log(
      "getFreeNameList in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const getDataFreeDay = async (data) => {
  try {
    const response = await api.post(`/tariff/freeday/getDataFreeDay`, data);
    return response;
  } catch (error) {
    console.log(
      "getDataFreeDay in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const saveFreeDay = async (data) => {
  try {
    const response = await api.post(`/tariff/freeday/save-free-day`, data);
    return response;
  } catch (error) {
    console.log(
      "getDataFreeDay in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const delFreeDay = async (data) => {
  try {
    const response = await api.post(`/tariff/freeday/delete-free-day`, data);
    return response;
  } catch (error) {
    console.log("delFreeDay in service/smartPort.service.js error : ", error);
    return error;
  }
};
