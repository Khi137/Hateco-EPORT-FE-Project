import { api } from "./api.service";

export const getCustomerType = async () => {
  try {
    const response = await api.post(`/common/customer_type`);
    return response;
  } catch (error) {
    console.log("getCustomerType in service/customerType.service.js error : ", error);
    return error;
  }
};

export const saveCustomerType = async (data) => {
  try {
    const response = await api.post(
      `/common/customer_type/save_customer_type`,
      data
    );
    return response;
  } catch (error) {
    console.log(
      "saveCustomerType in service/customerType.service.js error : ",
      error
    );
    return error;
  }
};

export const deleteCusttomerType = async (data) => {
  try {
    const response = await api.post(
      `/common/customer_type/delete_custtomer_type`,
      data
    );
    return response;
  } catch (error) {
    console.log(
      "saveCustomerType in service/customerType.service.js error : ",
      error
    );
    return error;
  }
};
