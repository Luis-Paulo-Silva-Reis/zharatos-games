import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css.css";
import './Componets/Pagination/pagination.css';

import Header from "./Componets/Header/Header";
import News from "./Componets/News/News";
import Pagination from "./Componets/Pagination/Pagination";
import Footer from "./Componets/Footer/Footer";

export default function BasicExample() {
  return (
    <Router>
      <Header></Header>
      <div className="main">
        <div className="alinha">
          <div className="nave">
             <ul className="head"> 
            <li className="row-h">
              <Link to="/" >
                Home
              </Link>
            </li>
            <li className="row-h">
              <Link to="/Lancamentos" >
                Lançamentos
              </Link>
            </li>
            <li className="row-h">
              <Link to="/Proximos-lancamentos" >
                Proximos Lançamentos
              </Link>
            </li>
            <li className="row-h"> 
              <Link to="/Noticias" >
                Noticias
              </Link>
            </li>
            <li className="row-h">
              <Link to="/Listas" >
                Listas
              </Link>
            </li>
            <li className="row-h">
              <Link to="/Dicas" >
                Dicas
              </Link>
            </li>
            <li className="row-h">
              <Link to="/Review">
                Review
              </Link>
            </li>
            <li className="row-h">
              <Link to="/Historias" >
                Historias
              </Link>
            </li>
             </ul> 
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Lancamentos">
            <Lancamentos />
          </Route>
          <Route path="/Proximos-lancamentos">
            <Proximoslancamentos />
          </Route>
          <Route path="/Noticias">
            <Noticias />
          </Route>
          <Route path="/Listas">
            <Listas />
          </Route>
          <Route path="/Dicas">
            <Dicas />
          </Route>
          <Route path="/Review">
            <Review />
          </Route>
          <Route path="/Historias">
            <Historias />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="alinha">
      <News />
      <Pagination />
      <Footer />
    </div>
  );
}

function Lancamentos() {
  return (
    <div className="alinha">
      
      <Pagination />
      <Footer />
    </div>
  );
}

function Proximoslancamentos() {
  return (
    <div className="alinha">
     
      <Pagination />
      <Footer />
    </div>
  );
}

function Noticias() {
  return (
    <div className="alinha">
      <Pagination />
      <Footer />
    </div>
  );
}

function Listas() {
  return (
    <div className="alinha">
      <Pagination />
      <Footer />
    </div>
  );
}

function Dicas() {
  return (
    <div className="alinha">
      <Pagination />
      <Footer />
    </div>
  );
}

function Review() {
  return (
    <div className="alinha">
      <Pagination />
      <Footer />
    </div>
  );
}

function Historias() {
  return (
    <div className="alinha">
      <Pagination />
      <Footer />
    </div>
  );
}
