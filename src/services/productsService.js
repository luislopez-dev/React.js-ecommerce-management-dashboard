const axios = require("axios");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTU3ZGE2ZTQxOGUzNDI4OGQzZWIxZGUiLCJpYXQiOjE2MzM2MTEzMzUsImV4cCI6MTYzMzY5NzczNX0.OeF2IPyMjEVtD_fI_WL7NRSkIiIJWAIUuik95RZTe7M";

export const createProduct = async (name, price, description, ammount, imgURL) => {

  let url = "http://localhost:8080/api";

  const request =  await axios.post(url,  {name, price, description, ammount, imgURL}, {headers: {'Authorization': `Basic ${token}`}});

  return request;

}

export const getProducts = (offset, limit) => {

  let url = "http://localhost:8080/api/products";

  return axios.post(url, {offset, limit});

}

export const getProduct = (id) => {

  let url = `http://localhost:8080/api/${id}`;

  return fetch(url)
  .then(data => data.json());

}

export const updateProduct = async(id, name, price, description, ammount, imgURL) => {

  let url = `http://localhost:8080/api`;
 
  const request =  await axios.put(url,  {id, name, price, description, ammount, imgURL}, {headers: {'Authorization': `Basic ${token}`}});

  return request;
}

export const deleteProduct = async (id) => {

  let url = `http://localhost:8080/api/${id}`;

  const request =  await axios.delete(url, {headers: {'Authorization': `Basic ${token}`}});

  return request;

}


