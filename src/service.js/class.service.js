import { api } from "./api.service";

export const getClasses = async (data) => {
  try {
    const response = await api.post(`/common/class/get-classes`, data);
    return response;
  } catch (error) {
    console.log("getClasses in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const saveClasses = async (data) => {
  try {
    const response = await api.post(`/common/class/save-classes`, data);
    return response;
  } catch (error) {
    console.log("saveClasses in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const deleteClasses = async (data) => {
  try {
    const response = await api.post(`/common/class/delete-classes`, data);
    return response;
  } catch (error) {
    console.log(
      "deleteClasses in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};
