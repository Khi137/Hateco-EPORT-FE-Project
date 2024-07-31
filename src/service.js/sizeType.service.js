import { api } from "./api.service";

export const getSizeType = async () => {
  try {
    const response = await api.post(`/common/size_type`);
    return response;
  } catch (error) {
    console.log("getSizeType in service/sizeType.service.js error : ", error);
    return error;
  }
};

export const saveSize = async () => {
  try {
    const response = await api.post(`/common/size_type/save_size`);
    return response;
  } catch (error) {
    console.log("saveSize in service/sizeType.service.js error : ", error);
    return error;
  }
};

export const deleteSize = async (data) => {
  try {
    const response = await api.post(`/common/size_type/delete_size`, data);
    return response;
  } catch (error) {
    console.log("deleteSize in service/sizeType.service.js error : ", error);
    return error;
  }
};
