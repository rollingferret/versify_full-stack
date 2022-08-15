import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Signup from './session/signup';


const App = () => (
    <div>
        <Signup />
    </div>
)

export default App;