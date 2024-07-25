import { api } from "./api.service";

export const getHoliday = async () => {
  try {
    const response = await api.post(`/tariff/holiday`);
    return response;
  } catch (error) {
    console.log("getHoliday in service/tariff.service.js error : ", error);
    return error;
  }
};

export const saveConfigHoliday = async () => {
  try {
    const response = await api.post(`/tariff/holiday/save_config_holiday`);
    return response;
  } catch (error) {
    console.log(
      "saveConfigHoliday in service/tariff.service.js error : ",
      error
    );
    return error;
  }
};

export const deleteConfigHoliday = async (id) => {
  const data = {
    id: id,
  };

  try {
    const response = await api.post(
      `/tariff/holiday/delete_config_holiday`,
      data
    );
    return response;
  } catch (error) {
    console.log(
      "deleteConfigHoliday in service/tariff.service.js error : ",
      error
    );
    return error;
  }
};

export const getForConfigHoliday = async (data) => {
  try {
    const response = await api.post(
      `/tariff/holiday/get_form_config_holiday`,
      data
    );
    return response;
  } catch (error) {
    console.log(
      "getForConfigHoliday in service/tariff.service.js error : ",
      error
    );
    return error;
  }
};
