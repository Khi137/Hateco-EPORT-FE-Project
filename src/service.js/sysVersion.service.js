import { api } from "./api.service";

export const getSysVerison = async () => {
  try {
    const response = await api.post(`/system/sys_ver`);
    return response;
  } catch (error) {
    console.log(
      "getSysVerison in service/sysVerison.service.js error : ",
      error
    );
    return error;
  }
};

export const saveSysVerison = async (data) => {
  try {
    const response = await api.post(`/system/sys_ver/save`, data);
    return response;
  } catch (error) {
    console.log(
      "saveSysVerison in service/sysVerison.service.js error : ",
      error
    );
    return error;
  }
};

export const deleteSysVerison = async (data) => {
  try {
    const response = await api.post(`/system/sys_ver/delete_sys_verison`, data);
    return response;
  } catch (error) {
    console.log(
      "deleteSysVerison in service/sysVerison.service.js error : ",
      error
    );
    return error;
  }
};
