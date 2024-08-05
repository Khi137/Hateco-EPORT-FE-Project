import { api } from "./api.service";

export const deleteContract = async (data) => {
  try {
    const response = await api.post(`/tariff/contract/delete-contract`, data);
    return response;
  } catch (error) {
    console.log(
      "deleteContract in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const saveContract = async (data) => {
  try {
    const response = await api.post(`/tariff/contract/save-contract`, data);
    return response;
  } catch (error) {
    console.log("saveContract in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const getTariffList = async (data) => {
  try {
    const response = await api.post(`/tariff/contract/get-tariff-list`, data);
    return response;
  } catch (error) {
    console.log(
      "getTariffList in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const reloadTariff = async (data) => {
  try {
    const response = await api.post(`/tariff/contract/reloadTariff`, data);
    return response;
  } catch (error) {
    console.log("reloadTariff in service/smartPort.service.js error : ", error);
    return error;
  }
};
