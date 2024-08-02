import { api } from "./api.service";

export const getCustomer = async (data) => {
  try {
    const response = await api.post(`/common/customer`, data);
    return response;
  } catch (error) {
    console.log("getCustomer in service/common.service.js error : ", error);
    return error;
  }
};

export const saveCustomer = async (data) => {
  try {
    const response = await api.post(`/common/customer/save_customer`, data);
    return response;
  } catch (error) {
    console.log("saveCustomer in service/common.service.js error : ", error);
    return error;
  }
};

export const deleteCustomer = async (data) => {
  try {
    const response = await api.post(`/common/customer/delete_customer`, data);
    return response;
  } catch (error) {
    console.log("deleteCustomer in service/common.service.js error : ", error);
    return error;
  }
};
