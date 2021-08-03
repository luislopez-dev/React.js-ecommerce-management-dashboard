export const getProducts = () => {

  let url = "http://localhost:8080/product/1"; 

  return fetch(url)
  .then(data => data.json());   

}