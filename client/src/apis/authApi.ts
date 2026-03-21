import {  axiosWithoutCreds } from "./axiosInstances";

export const sendOtp = async (email: string) => {
  const { data } = await axiosWithoutCreds.post("/auth/send-otp", { email });
  return data;
};

// export const loginWithGoogle = async (idToken) => {
//   const { data } = await axiosWithCreds.post("/auth/google", { idToken });
//   return data;
// };

// export const isAuthenticated = async () => {
//   try {
//     const response = await axiosWithCreds.get("user");
//     return { success: true, ...response.data };
//   } catch (error) {
//     return error?.response?.data;
//   }
// };


// export const logout = async () => {
//   try {
//     const response = await axiosWithCreds.post("user/logout");
//     return { success: true, ...response.data };
//   } catch (error) {
//     return error?.response?.data;
//   }
// };


// export const logoutAll = async () => {
//   try {
//     const response = await axiosWithCreds.post("user/logout-all");
//     return { success: true, ...response.data };
//   } catch (error) {
//     return error?.response?.data;
//   }
// };