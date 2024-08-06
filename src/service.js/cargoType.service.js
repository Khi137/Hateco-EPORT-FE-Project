import { api } from "./api.service";

export const getCargotype = async (data) => {
  try {
    const response = await api.post(`/common/cargotype/get-cargotype`, data);
    return response;
  } catch (error) {
    console.log("getCargotype in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const saveCargotype = async (data) => {
  try {
    const response = await api.post(`/common/cargotype/save-cargotype`, data);
    return response;
  } catch (error) {
    console.log(
      "saveCargotype in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const deleteCargotype = async (data) => {
  try {
    const response = await api.post(`/common/cargotype/delete-cargotype`, data);
    return response;
  } catch (error) {
    console.log(
      "deleteCargotype in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};
