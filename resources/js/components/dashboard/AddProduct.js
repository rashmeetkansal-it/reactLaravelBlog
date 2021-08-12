import React, { useState  } from 'react';
import { useHistory } from 'react-router-dom';


function AddProduct() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  
  async function addProductTable()
  {
   
    console.warn(name, file, price, description)
    let formData = new FormData(); 
    formData.append('name', name);   //append the values with key, value pair
    formData.append('price', price);
    formData.append('file_path', file);
    formData.append('description', description);
    let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
      method: 'POST',
      body: formData
     
    })
    result = await result.json();
    console.warn(result)
    alert('data saved');
    history.push("/productsList")
  }

  return (
    <div className="container m-top-60">
      <div className="login-wrapper">

        <h2>Add Product</h2>
        
           <label>
            <p>Name</p>
            <input type="text" placeholder="Name" className="form-control"  onChange={(e) => setName(e.target.value)}  />
          </label><br></br>
          <label>
            <p>File</p>
            <input type="file" placeholder="Image" className="form-control"   onChange={(e) => setFile(e.target.files[0])} />
          </label><br></br>

          <label>
            <p>price</p>
            <input type="text" placeholder="price" className="form-control"   onChange={(e) => setPrice(e.target.value)} />
          </label><br></br>

          <label>
            <p>Description</p>
            <input type="text" placeholder="Description" className="form-control"  onChange={(e) => setDescription(e.target.value)}  />
          </label>          <div>
            <button  className="btn btn-primary" onClick={addProductTable}  >Save</button>
          </div>
       
      </div>
    </div>
  )


}




export default AddProduct