import { api } from "./api.service";

export const getReefer = async () => {
  try {
    const response = await api.post(`/tariff/reefer`);
    return response;
  } catch (error) {
    console.log("getReefer in service/reefer.service.js error : ", error);
    return error;
  }
};

export const saveReefer = async (data) => {
  try {
    const response = await api.post(`/tariff/reefer/save_reefer`, data);
    return response;
  } catch (error) {
    console.log("saveReefer in service/reefer.service.js error : ", error);
    return error;
  }
};

export const deleteReefer = async (data) => {
  try {
    const response = await api.post(`/tariff/reefer/delete_reefer`, data);
    return response;
  } catch (error) {
    console.log("deleteReefer in service/reefer.service.js error : ", error);
    return error;
  }
};
