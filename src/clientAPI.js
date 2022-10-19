const baseURL = "https://disease.sh/v3/covid-19/";

const api = {
  fetchAll: `${baseURL}all`,
  fetchAllCountries: `${baseURL}countries`,
  fetchHistory: `${baseURL}historical/all?lastdays=30`,
  fetchUsaData: `${baseURL}countries/usa?strict=true`,
  fetchUsaHistory: `${baseURL}historical/usa?lastdays=30`,
  fetchStates: `${baseURL}states`,
};

export default api;
