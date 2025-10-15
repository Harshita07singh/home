import axiosInstance from "./axiosInstance";

export const getWallet = async () => {
  const res = await axiosInstance.get("/wallet");
  return res.data;
};

export const depositFunds = async (amount) => {
  const res = await axiosInstance.post("/wallet/deposit", { amount });
  return res.data;
};

export const withdrawFunds = async (amount) => {
  const res = await axiosInstance.post("/wallet/withdraw", { amount });
  return res.data;
};
