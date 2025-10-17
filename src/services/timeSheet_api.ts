import apiClient from "../lib/apiClient";

const getTimeSheets = async () => {
  const response = await apiClient.get("/timesheets");
  return response.data;
};

const getWeeklyWorks = async () => {
  const response = await apiClient.get("/entries");
  return response.data;
};

export { getTimeSheets, getWeeklyWorks };
