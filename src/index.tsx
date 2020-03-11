import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import Posts from './components/posts/posts';
import Post from './components/post/post';

import './style.css';

ReactDOM.render((
<BrowserRouter>
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/contacts' component={Contacts} />
      <Route exact path='/posts' component={Posts} />
      <Route path='/posts/:id' component={Post} />
    </Switch>
  </App>
</BrowserRouter>
), document.getElementById('root'));