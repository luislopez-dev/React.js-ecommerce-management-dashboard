const axios = require("axios");
const api_base_url = "http://localhost:8080/api";
let token = "";

if(localStorage.getItem("user")){
  token = (JSON.parse(localStorage.getItem("user"))).token;
}

export const createProduct = async (name, brand, manufacturer, price, description, ammount, imgURL) => {
  let url = "http://localhost:8080/api";
  const request =  await axios.post(url,  {name, brand, manufacturer, price, description, ammount, imgURL}, {headers: {'Authorization': `Basic ${token}`}});
  return request;
}

export const getProducts = async(offset, limit) => {
  const request =  await axios.post(`${api_base_url}/products`, {offset, limit});
  return request.data;
}

export const getProduct = async (id) => {
  const request = await axios.get(`${api_base_url}/${id}`);
  return request;
}

// Search
export const queryItem = async (item, offset, limit) => {
  const request = await axios.post(`${api_base_url}/search`, {item, offset, limit});
  return request.data;
}

export const updateProduct = async(id, name, brand, manufacturer, price, description, ammount, imgURL) => { 
  const request =  await axios.put(api_base_url,  {id, name, brand, manufacturer, price, description, ammount, imgURL}, {headers: {'Authorization': `Basic ${token}`}});
  return request;
}

export const deleteProduct = async (id) => {

  let url = `http://localhost:8080/api/${id}`;

  const request =  await axios.delete(url, {headers: {'Authorization': `Basic ${token}`}});

  return request;

}


