import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard'; 
import Profile from '../Profile/Profile';
import Product from '../Product/Product';
import User from '../Users/User';
import Oders from '../Oders/Oders';
import Navbar from '../NavbarAdmin/navbar';
import Categories from '../Categories/Categories';
import AdminArray from '../DataAdmin';
import "./HomeAdmin.scss";
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight,faBars } from '@fortawesome/free-solid-svg-icons';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

import Incon from '../incon-on-off/Icon';

function HomeAdmin(props) {
    const [clickId, setClickId] = useState(1);
    return (
        <>
            <BrowserRouter>
                <div className="container-fluid admin">
                    <div className="incon-menu">  
                    {/* <FontAwesomeIcon icon={faBars}   /> */}
                     <FontAwesomeIcon icon={faHandPointRight} />
                      </div>
                    <div className="admin-left">
                        <div className="logo"><h1>SureAdmin</h1></div>
                  {
                   AdminArray.map((e)=>(
                    <>
                    <Link key={e.id} as={Link} to={e.link} className={clickId === e.id ? "click" : ""}>
                  
                    <h1 onClick={() => setClickId(e.id)}>
                        <FontAwesomeIcon icon={e.icon} /> 
                         {e.name} </h1>
                    </Link>         
                    </>      
                   ))
                  }
                            <Incon></Incon>
                    </div>
                    <div className="admin-right">
                      <Header></Header>
                        <Routes>
                        <Route exact path="/" element={<Dashboard></Dashboard>} />
                        <Route exact path="/Categories" element={<Categories></Categories>} />
                        <Route exact path="/oders" element={<Oders></Oders>} />
                        <Route exact path="/Product" element={<Product></Product>} />
                        <Route exact path="/users" element={<User></User>} />
                        <Route exact path="/Profile" element={<Profile />} />
                        <Route exact path="/Navbar" element={<Navbar />} />
                        </Routes>
                    </div>
                </div>
                </BrowserRouter>
           
        </>
    );
}

export default HomeAdmin;