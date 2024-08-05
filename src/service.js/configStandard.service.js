import { api } from "./api.service";

export const mauStandard = async (data) => {
  try {
    const response = await api.post(`/tariff/standard`, data);
    return response;
  } catch (error) {
    console.log("mauStandard in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const saveStandard = async (data) => {
  try {
    const response = await api.post(`/tariff/standard/save-standard`, data);
    return response;
  } catch (error) {
    console.log("saveStandard in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const getDataStandard = async (data) => {
  try {
    const response = await api.post(`/tariff/standard/get-data-standard`, data);
    return response;
  } catch (error) {
    console.log(
      "getDataStandard in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const delStandard = async (data) => {
  try {
    const response = await api.post(`/tariff/standard/delete-standard`, data);
    return response;
  } catch (error) {
    console.log("delStandard in service/smartPort.service.js error : ", error);
    return error;
  }
};
