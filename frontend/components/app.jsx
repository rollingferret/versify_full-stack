import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import Splash from '../splash/splash';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import SignupContainer from './session/signup_container'


const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/signup" component={SignupContainer} />
        {/* <Route exact path="/login" component={LoginContainer} /> */}
        <Route exact path="/api/playlists" component={PlaylistIndexContainer} />
      </Switch>
          
    </div>
)

export default App;