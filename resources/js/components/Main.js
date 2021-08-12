import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './common/Header';
import Home from './pages/Index';
import About from './pages/About';
import Blog from './pages/News';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import DashboardIndex from './dashboard/DashboardIndex';
import ProductList from './dashboard/ProductList';
import AddProduct from './dashboard/AddProduct';
import UpdateProduct from './dashboard/UpdateProduct';
import NewsDetails from './pages/NewsDetails'

class App extends Component {
    render() {
        
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route exact path='/blog' component={Blog}/>
                        <Route exact path='/myaccount' component={SignIn}/>
                        <Route exact path='/signup' component={SignUp}/>
                        <Route exact path='/dashboard' component={DashboardIndex}/>
                        <Route exact path="/blog/:id" component={NewsDetails} />
                        <Route exact path="/productsList" component={ProductList} />
                        <Route exact path="/addProduct" component={AddProduct} />
                        <Route exact path="/update/:id" component={UpdateProduct} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))