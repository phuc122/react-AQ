import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Oders from '../Oders/Oders';
import Product from '../Product/Product';
import User from '../Users/User';
import AdminArray from '../DataAdmin';
import "./HomeAdmin.scss";
function HomeAdmin(props) {
    const [clickId, setClickId] = useState(1);
    return (
        <>
            <BrowserRouter>

                <div className="container-fluid admin">
                    <div className="admin-left">
                  {
                   AdminArray.map((e)=>(
                    <>
                    <Link key={e.id} as={Link} to={e.link} className={clickId === e.id ? "click" : ""}>
                    <h1 onClick={() => setClickId(e.id)}>{e.name}</h1>
                    </Link>         
                    </>      
                   ))
                  }
                    </div>
                    <div className="admin-right">
                        <Routes>
                        <Route exact path="/" element={<Dashboard></Dashboard>} />
                        <Route exact path="/oders" element={<Oders></Oders>} />
                        <Route exact path="/product" element={<Product></Product>} />
                        <Route exact path="/user" element={<User></User>} />
                        </Routes>
                    </div>
                </div>
                </BrowserRouter>
        </>
    );
}

export default HomeAdmin;