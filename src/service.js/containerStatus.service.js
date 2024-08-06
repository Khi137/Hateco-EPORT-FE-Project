import { api } from "./api.service";

export const getConstatus = async (data) => {
  try {
    const response = await api.post(`/common/container/get-constatus`, data);
    return response;
  } catch (error) {
    console.log("getConstatus in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const saveConstatus = async (data) => {
  try {
    const response = await api.post(`/common/container/save-constatus`, data);
    return response;
  } catch (error) {
    console.log(
      "saveConstatus in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const deleteConstatus = async (data) => {
  try {
    const response = await api.post(`/common/container/delete-constatus`, data);
    return response;
  } catch (error) {
    console.log(
      "deleteConstatus in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};
