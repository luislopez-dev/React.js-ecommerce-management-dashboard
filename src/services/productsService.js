const axios = require("axios");

let token = "";

if(localStorage.getItem("user")){
  token = (JSON.parse(localStorage.getItem("user"))).token;
}

export const createProduct = async (name, brand, manufacturer, price, description, ammount, imgURL) => {

  let url = "http://localhost:8080/api";

  const request =  await axios.post(url,  {name, brand, manufacturer, price, description, ammount, imgURL}, {headers: {'Authorization': `Basic ${token}`}});

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


