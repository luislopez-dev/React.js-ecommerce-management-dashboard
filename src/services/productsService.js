export const getProducts = () => {

  let url = "http://localhost:8080/products";

  return fetch(url, 
               { method: 'POST', 
                 headers: {
                   'Authorization': 'Basic ...',
                   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                 },
                 body: new URLSearchParams({offset:0, limit:10}) 
               })
  .then(data => data.json());

}