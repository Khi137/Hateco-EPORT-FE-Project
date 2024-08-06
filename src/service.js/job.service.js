import { api } from "./api.service";

export const getJobs = async (data) => {
  try {
    const response = await api.post(`/common/job/get-jobs`, data);
    return response;
  } catch (error) {
    console.log("getJobs in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const saveJobs = async (data) => {
  try {
    const response = await api.post(`/common/job/save-jobs`, data);
    return response;
  } catch (error) {
    console.log("saveJobs in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const deleteJobs = async (data) => {
  try {
    const response = await api.post(`/common/job/delete-jobs`, data);
    return response;
  } catch (error) {
    console.log("deleteJobs in service/smartPort.service.js error : ", error);
    return error;
  }
};
