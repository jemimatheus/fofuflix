import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/Home';
import CadastroVideo from './components/Pages/cadastro/Video';
import CadastroCategoria from './components/Pages/cadastro/Categoria/index';
import img from './assets/img/404.jpg'
import {BrowserRouter, Switch,Route } from 'react-router-dom';



const Pagina404 = () => (
<img className="cat" src={img} alt="Gatinho 404" />
)

ReactDOM.render(
<BrowserRouter>
<Switch>
  <Route path="/" component={Home} exact />
  <Route path="/cadastro/video" component={CadastroVideo} />
  <Route path="/cadastro/categoria" component={CadastroCategoria} />
  <Route component={Pagina404} />
</Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

