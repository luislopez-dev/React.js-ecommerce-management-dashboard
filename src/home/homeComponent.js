import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { Card, Button, Table } from "react-bootstrap";

function Home(){

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getProducts().then( products => {
      if(mounted){
        setProducts(products);
        console.log(products);
      }
    })
    return () => mounted = false;
  }, []);

  return (
    <div> 
     
     <Table striped bordered hover variant="dark">
       <thead>
         <tr>
           <th>#</th>
           <th>Name</th>
           <th>Price</th>
           <th>Available</th>
           <th>Description</th>
           <th>Edit</th>
           <th>Delete</th>
         </tr>
       </thead>

       <tbody>
       {products.map( (item, i) => { return (
         <tr key={i}>
           <td>{i + 1}</td>
           <td>{item.name}</td>
           <td>Q{item.price}</td>
           <td>{item.ammount}</td>
           <td>{item.description}</td>
           <td><Button variant="warning">Edit</Button></td>
           <td><Button variant="danger">Delete</Button></td>
         </tr>
        ) } )
       }
       </tbody>
     </Table>
    </div>
  )   
}

export default Home;