import React, {  useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

function DashboardIndex(){
    const history = useHistory();
    let user= JSON.parse(localStorage.getItem('user-info'))
    useEffect(() => {
        if (user.id && user.email) {
          history.push("/dashboard")
        }
        else
        history.push("/myaccount")
      }, [])
     
      console.warn(user.email)
      async function logOut() {
        localStorage.clear();
        history.push("/")
      }
      return (
        <div className="container m-top-60">
        <div className="row">
            <div className="col-md-3">
                <p>{user && user.name} <br></br>
                <Link   to='/productsList'>Products</Link><br></br>
                <button type="button" className="btn btn-primary"  onClick={logOut}>Logout</button>
                </p>
                
               
            </div>
            <div className="col-md-9">
                <h4>Dashboard</h4>
                <hr/>
                <p>
                The necessity of quality education for the underprivileged children of Chittagong Hill Tracts was felt for a long time. With the splendid aim of preparing the next generation of this region as responsible and educated citizens of the country the General Officer Commanding of 24 Infantry Division and Area Commander of Chittagong area laid the foundation stone of Khagrachari Cantonment Public School & College (KCPSC) on April 27, 2002. 
                </p>
            </div>
        </div>
    </div>
    )


}

   
    

export default DashboardIndex