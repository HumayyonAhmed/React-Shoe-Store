import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import * as allShoes from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { Container } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(allShoes.default);
  }, []);

  return (
    <Router>
      <Menu />
      <Container>
        <Routes>
          <Route exact path="/" element={<h1 className="mt-3 jumbotron text-center">This is the Homepage</h1>} />
          <Route path="catalog" element={<Catalog />} >
            <Route exact path="/" element={<Products shoes={data}/>} />
            <Route path=":Handle" element={<ProductDetails shoes={data}/>} />
          </Route>
          <Route path="about" element={<h1 className="mt-3 jumbotron text-center">About</h1>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;


function Catalog() {
  return (
    <>
      <Outlet />
    </>
  );
}