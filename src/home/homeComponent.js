import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productsService";
import { Button, Row, Table, Container, Modal, Image, Pagination, Form, FormControl, InputGroup} from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

async function search (name, offset, limit){
 const response = await axios.post('http://localhost:8080/api/search', {name, offset, limit});
}

function Home(){

  let query = useQuery();
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [itemToDelete, setItemToDelete] = useState({});
  let page = Number(query.get("page")) || 1;
  let products_quantity = 10;
  let offset = (page  - 1) * products_quantity;
  let limit = products_quantity;
  const [total, setTotal] = useState(0)
  const search = query.get("search") || "";
  
  const handleClose = (id) => { setShow(false); 
                                if(id){ deleteProduct(id); 
                                 setProducts(products.filter(item => item._id != id));
                                }
                              };
  const handleShow = (obj) => {setShow(true); setItemToDelete(obj);}

  useEffect( async () => {

    let mounted = true;

    if(!search && !page){
      return;
    }

    if(search){

      const response = await axios.post('http://localhost:8080/api/search', {name:search, offset, limit});
      setProducts(response.data.products);
      setTotal(response.data.total);
      
    }else{
      const data = await getProducts(offset, limit);
      setProducts(data.data.products);
      setTotal(data.data.total);
    }
    return () => mounted = false;
  }, []);

  let active = page;
  let items = [];
  for (let number = 1; number <= Math.ceil(total / products_quantity); number++) {
    items.push(
      <Pagination.Item href={search?`/home?page=${number}&search=${search}`:`/home?page=${number}`} 
                       key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (

    <Container>
    <Row className="g-5 mt-5">

    <Form action="/home">
    <InputGroup className="mb-3" style={{width:"300px"}}>
      <InputGroup.Text id="btnGroupAddon">
       <i className='fas fa-search'></i>
      </InputGroup.Text>
      <FormControl
        type="search"
        placeholder="search"
        aria-label="search"
        aria-describedby="btnGroupAddon"
        name="search"
      />
    </InputGroup>
    </Form>

     <Table striped bordered hover style={{textAlign: "center"}}>
       <thead>
         <tr>
           <th>Image</th>
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
         <tr key={i} className="overflow-hidden">
           <td> 
            <Image src={item.imgURL} rounded style={{width:'100px'}}/> 
           </td>
           <td >{item.name}</td>
           <td>Q{item.price}</td>
           <td>{item.ammount}</td>
           <td className="overflow-hidden">
             <div style={{"height":"100px", "overflow":"hidden", textAlign: "justify" }}>{item.description}</div>
           </td>
           <td>
             <Button variant="warning" href={"/update/"+item._id}>
             <i className='fas fa-edit'></i>
             </Button>
           </td>
           <td>
            <Button variant="danger" onClick={() => handleShow(item)}>
            <i className='fas fa-trash-alt'></i>
            </Button>
          </td>
         </tr>
        ) } )
       }
       </tbody>
     </Table>

     <Pagination className="justify-content-center">{items}</Pagination>

     <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Delete</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{textAlign: "center"}}>
        
        <Image src={itemToDelete.imgURL} rounded style={{width:'100px'}}/> 
        <br/>
        {itemToDelete.name}                           
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={ handleClose}>
           Cancel
         </Button>
         <Button variant="danger" onClick={ ()=> handleClose(itemToDelete._id)} >
           Delete
         </Button>
       </Modal.Footer>
     </Modal>

    </Row>
    </Container>
  )   
}

export default Home;