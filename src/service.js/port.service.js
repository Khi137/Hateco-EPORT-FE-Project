import { api } from "./api.service";

export const getPorts = async (data) => {
  try {
    const response = await api.post(`/common/port/get-ports`, data);
    return response;
  } catch (error) {
    console.log("getPorts in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const savePorts = async (data) => {
  try {
    const response = await api.post(`/common/port/save-ports`, data);
    return response;
  } catch (error) {
    console.log("savePorts in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const deletePorts = async (data) => {
  try {
    const response = await api.post(`/common/port/delete-ports`, data);
    return response;
  } catch (error) {
    console.log("deletePorts in service/smartPort.service.js error : ", error);
    return error;
  }
};
