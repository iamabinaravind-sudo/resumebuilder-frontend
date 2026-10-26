import axiosService from '../api/axiosServices';

export const addResumeAPI = async (reqBody) => {
  return await axiosService('POST', '/resume', reqBody);
};

export const viewResumeAPI = async (id) => {
  return await axiosService('GET', `/resume/${id}`);
};

export const editResumeAPI = async (id, reqBody) => {
  return await axiosService('PUT', `/resume/${id}`, reqBody);
};


export const downloadResumeAPI = async (reqBody) => {
  return await axiosService('POST', '/downloads', reqBody);
};

export const getDownloads = async () => {
  return await axiosService('GET', '/downloads');
};


export const uploadCloudinary= async (imageData)=>{
const formData= new FormData()
formData.append("file",imageData)
formData.append(
    "upload_preset",
    "resume-builder"
)
const response= await fetch('https://api.cloudinary.com/v1_1/yarlrcof/image/upload',{
    method:'POST',
    body:formData
})
let data = await response.json()
  console.log(data.url);
return data.url
  
  
}


export const deleteDownloadsAPI = async (id) => {
  return await axiosService('DELETE', `/downloads/${id}`);
};


export const viewAllResumesAPI = async () => {
  return await axiosService('GET', `/resume`,{});
};

export const viewAllResumesDelete = async(id)=>{
return await axiosService('DELETE',`/resume/${id}`,{})

}