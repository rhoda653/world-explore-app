const BASE_URL = 'https://restcountries.com/v3.1';

export const countriesAPI = {
  // Get all countries
  getAllCountries: async () => {
    const response = await fetch(`${BASE_URL}/all`);
    return response.json();
  },

  // Search countries by name
  searchByName: async (name) => {
    const response = await fetch(`${BASE_URL}/name/${name}`);
    return response.json();
  },

  // Filter by region
  getByRegion: async (region) => {
    const response = await fetch(`${BASE_URL}/region/${region}`);
    return response.json();
  },

  // Get country by code
  getByCode: async (code) => {
    const response = await fetch(`${BASE_URL}/alpha/${code}`);
    return response.json();
  }
};