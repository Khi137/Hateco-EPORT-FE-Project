import { api } from "./api.service";

// config_standard
export const mauStandard = async (data) => {
  try {
    const response = await api.post(`/tariff/standard`, data);
    return response;
  } catch (error) {
    console.log("mauStandard in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const saveStandard = async (data) => {
  try {
    const response = await api.post(`/tariff/standard/save-standard`, data);
    return response;
  } catch (error) {
    console.log("saveStandard in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const getDataStandard = async (data) => {
  try {
    const response = await api.post(`/tariff/standard/get-data-standard`, data);
    return response;
  } catch (error) {
    console.log(
      "getDataStandard in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const delStandard = async (data) => {
  try {
    const response = await api.post(`/tariff/standard/delete-standard`, data);
    return response;
  } catch (error) {
    console.log("delStandard in service/smartPort.service.js error : ", error);
    return error;
  }
};

// config_contract
export const deleteContract = async (data) => {
  try {
    const response = await api.post(`/tariff/contract/delete-contract`, data);
    return response;
  } catch (error) {
    console.log(
      "deleteContract in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const saveContract = async (data) => {
  try {
    const response = await api.post(`/tariff/contract/save-contract`, data);
    return response;
  } catch (error) {
    console.log("saveContract in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const getTariffList = async (data) => {
  try {
    const response = await api.post(`/tariff/contract/get-tariff-list`, data);
    return response;
  } catch (error) {
    console.log(
      "getTariffList in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const reloadTariff = async (data) => {
  try {
    const response = await api.post(`/tariff/contract/reloadTariff`, data);
    return response;
  } catch (error) {
    console.log("reloadTariff in service/smartPort.service.js error : ", error);
    return error;
  }
};

// config_free_day
export const getFreeNameList = async (data) => {
  try {
    const response = await api.post(`/tariff/freeday/getFreeNameList`, data);
    return response;
  } catch (error) {
    console.log(
      "getFreeNameList in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const getDataFreeDay = async (data) => {
  try {
    const response = await api.post(`/tariff/freeday/getDataFreeDay`, data);
    return response;
  } catch (error) {
    console.log(
      "getDataFreeDay in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const saveFreeDay = async (data) => {
  try {
    const response = await api.post(`/tariff/freeday/save-free-day`, data);
    return response;
  } catch (error) {
    console.log(
      "getDataFreeDay in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const delFreeDay = async (data) => {
  try {
    const response = await api.post(`/tariff/freeday/delete-free-day`, data);
    return response;
  } catch (error) {
    console.log("delFreeDay in service/smartPort.service.js error : ", error);
    return error;
  }
};

// bs_port

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

// bs_cargo_type

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

// bs_class

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

// bs_job
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
// bs_container_status

export const getConstatus = async (data) => {
  try {
    const response = await api.post(`/common/container/get-constatus`, data);
    return response;
  } catch (error) {
    console.log("getConstatus in service/smartPort.service.js error : ", error);
    return error;
  }
};

export const saveConstatus = async (data) => {
  try {
    const response = await api.post(`/common/container/save-constatus`, data);
    return response;
  } catch (error) {
    console.log(
      "saveConstatus in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};

export const deleteConstatus = async (data) => {
  try {
    const response = await api.post(`/common/container/delete-constatus`, data);
    return response;
  } catch (error) {
    console.log(
      "deleteConstatus in service/smartPort.service.js error : ",
      error
    );
    return error;
  }
};
