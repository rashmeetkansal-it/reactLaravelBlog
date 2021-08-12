import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';


function UpdateProduct(props) {
  console.warn(props.match.params.id);
  const [data, setData] = useState([]);
  useEffect(() => {
    getProductData();
  }, [])
  async function getProductData() {

    let result = await fetch("http://127.0.0.1:8000/api/product/" + props.match.params.id,
      {
        method: 'get',
      }
    );
    result = await result.json();
    console.warn(result);
    setData(result);
  }
  async function editProduct() {

    console.warn(name, file, price, description)
    let formData = new FormData();
    formData.append('name', name);   //append the values with key, value pair
    formData.append('price', price);
    formData.append('file_path', file);
    formData.append('description', description);
    /*let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
      method: 'POST',
      body: formData

    })
    result = await result.json();
    console.warn(result)
    alert('data saved');
    history.push("/productsList") */
  }
  return (
    <div className="container ">
      <div className="login-wrapper">

        <h2>Update Product</h2>

        <label>
          <p>Name</p>
          <input type="text" defaultValue={data.name} placeholder="Name" className="form-control" onChange={(e) => setName(e.target.value)} />
        </label><br></br>
        <label>
          <p>File</p>
          <input type="file" defaultValue={data.file_path} placeholder="Image" className="form-control" onChange={(e) => setFile(e.target.files[0])} />
        </label><br></br>

        <label>
          <p>price</p>
          <input type="text" defaultValue={data.price} placeholder="price" className="form-control" onChange={(e) => setPrice(e.target.value)} />
        </label><br></br>

        <label>
          <p>Description</p>
          <input type="text" defaultValue={data.description} placeholder="Description" className="form-control" onChange={(e) => setDescription(e.target.value)} />
        </label>          <div>
          <button className="btn btn-primary" onClick={() => editProduct(props.match.params.id)}  >Save</button>
        </div>

      </div>
    </div>
  )


}

export default withRouter(UpdateProduct)