
import axios from "axios";

const instance = axios.create({
  baseURL: "https://resumebuilderbackend-gb0j.onrender.com",
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => {
    console.log("API response received");
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.log("Unauthorized access");
      } else if (status === 404) {
        console.log("API endpoint not found");
      } else if (status === 500) {
        console.log("Server error");
      }
    } else if (error.request) {
      console.log("No response from the server");
    } else {
      console.log("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default instance;
