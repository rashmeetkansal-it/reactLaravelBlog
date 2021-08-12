import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function ProductList() {
    const [data, setData] = useState([]);
    const [srchtext, setSrchtext] = useState("");
    useEffect(() => {
        getList();
    }, [])
    async function deleteProduct(id) {

        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id,
            {
                method: 'delete',
            }
        );
        result = await result.json();
        getList();
    }
    async function getList() {

        let result = await fetch("http://127.0.0.1:8000/api/products");
        result = await result.json();
        console.warn(result);
        setData(result);
    }
    async function searchProduct(srchtext) {
   
        let formData = new FormData(); 
        formData.append('srchtext', srchtext); 
        let result = await fetch("http://127.0.0.1:8000/api/searchProduct", {
            method: 'POST',
            body: formData

        })
        result = await result.json();
        console.warn(result);
        setData(result);

    }

    return (
        <div className="container m-top-60">
            <div class="panel-body">
                
                <div class="row">
                <Link className='navbar-brand' to='/addProduct'>Add Product</Link>
                    <div class="col-md-12 col-sm-12 table-responsive">
                        <input type="text" placeholder="Search Keywords" className="form-control" onChange={(e) => searchProduct(e.target.value)} />
                        <table id="manage_all" class="table table-collapse table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                data.map((item) =>

                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td><img src={"http://127.0.0.1:8000/" + item.file_path}></img></td>
                                        <td>{item.price}</td>
                                        <td>{item.description}</td>
                                        <td><Link to={"update/" + item.id}><span className="update">Edit</span></Link> /
                                            <span onClick={() => deleteProduct(item.id)}>Remove</span> </td>
                                    </tr>

                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )


}




export default ProductList