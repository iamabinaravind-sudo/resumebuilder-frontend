
import axiosService from "../api/axiosServices";

export const addResumeAPI = async (reqBody) => {
  return await axiosService("POST", "/resume", reqBody);
};

export const viewResumeAPI = async (id) => {
  return await axiosService('GET', `/resume/${id}`, {});
};


export const editResumeAPI = async (id,reqBody) => {
  return await axiosService('PUT', `resume/${id}`, reqBody);
};
