export const getProducts = () => {

  let url = "http://localhost:8080/api/products";

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTU3ZGE2ZTQxOGUzNDI4OGQzZWIxZGUiLCJpYXQiOjE2MzMyMzk1NTgsImV4cCI6MTYzMzMyNTk1OH0.Hid5OfMPcwm0QbAEQaCHoHwDr20xWUITj6ZB2krytCU";

  return fetch(url, 
               { method: 'POST', 
                 headers: {
                   'Authorization': `Basic ${token}`,
                 },
                 body:{offset:0, limit:10}
               })
  .then(data => data.json());

}

export const getProduct = (id) => {

  let url = `http://localhost:8080/api/${id}`;

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTU3ZGE2ZTQxOGUzNDI4OGQzZWIxZGUiLCJpYXQiOjE2MzMyMzk1NTgsImV4cCI6MTYzMzMyNTk1OH0.Hid5OfMPcwm0QbAEQaCHoHwDr20xWUITj6ZB2krytCU";

  return fetch(url, 
               { method: 'GET', 
                 headers: {
                   'Authorization': `Basic ${token}`,
                 }
               })
  .then(data => data.json());

}