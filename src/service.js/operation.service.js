import { api } from "./api.service";

export const getOperation = async () => {
  try {
    const response = await api.post(`/common/operation`);
    return response;
  } catch (error) {
    console.log("getOperation in service/operation.service.js error : ", error);
    return error;
  }
};

export const saveOperation = async (data) => {
  try {
    const response = await api.post(`/common/operation/save_operation`, data);
    return response;
  } catch (error) {
    console.log(
      "saveOperation in service/operation.service.js error : ",
      error
    );
    return error;
  }
};

export const deleteOperation = async (data) => {
  try {
    const response = await api.post(`/common/operation/delete_operation`, data);
    return response;
  } catch (error) {
    console.log(
      "deleteOperation in service/operation.service.js error : ",
      error
    );
    return error;
  }
};
