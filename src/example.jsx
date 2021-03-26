import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css.css";
import './Componets/Pagination/pagination.css';

import Header from "./Componets/Header/Header";
import News from "./Componets/News/News";
import Footer from "./Componets/Footer/Footer";

import Pagination from "./Componets/Pagination/Pagination";
import Pagination_lancamentos from "./Componets/Pagination/proximos_lancamentos";
import Pagination_proximos_lancamentos from "./Componets/Pagination/Pagination_proximos_lancamentos";
import Pagination_noticias from './Componets/Pagination/Pagination_noticias'
import Pagination_listas from './Componets/Pagination/Pagination_listas'
import Pagination_dicas from './Componets/Pagination/Pagination_dicas'
import Pagination_review from './Componets/Pagination/Pagination_review'
import Pagination_historias from './Componets/Pagination/Pagination_historias'

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
              <Link to="/lancamentos" >
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
          <Route path="/lancamentos">
            <Lancamentos />
          </Route>
          <Route path="/proximos-lancamentos">
            <Proximoslancamentos />
          </Route>
          <Route path="/noticias">
            <Noticias />
          </Route>
          <Route path="/listas">
            <Listas />
          </Route>
          <Route path="/dicas">
            <Dicas />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/historias">
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
      
      <Pagination_lancamentos />
      <Footer />
    </div>
  );
}

function Proximoslancamentos() {
  return (
    <div className="alinha">
     
      <Pagination_proximos_lancamentos />
      <Footer />
    </div>
  );
}

function Noticias() {
  return (
    <div className="alinha">
      
      <Pagination_noticias />
      <Footer />
    </div>
  );
}

function Listas() {
  return (
    <div className="alinha">
      <Pagination_listas/>
      <Footer />
    </div>
  );
}

function Dicas() {
  return (
    <div className="alinha">
      <Pagination_dicas />
      <Footer />
    </div>
  );
}

function Review() {
  return (
    <div className="alinha">
      <Pagination_review />
      <Footer />
    </div>
  );
}

function Historias() {
  return (
    <div className="alinha">
      <Pagination_historias />
      <Footer />
    </div>
  );
}
