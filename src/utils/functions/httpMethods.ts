import axios from "axios";

const Base_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
const Api_URL = process.env.REACT_APP_API || "/api";

const axionsInstance = axios.create({
  baseURL: Base_URL + Api_URL,
});

// Get method
export const get = async (url: string, options: any) => {
  try {
    const { data } = await axionsInstance.get(url, options);
    return data;
  } catch (error: any) {
    throw error;
  }
};
