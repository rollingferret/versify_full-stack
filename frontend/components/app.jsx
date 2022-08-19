import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import SplashContainer from '../splash/splash_container';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import PlaylistIndexContainer from './playlists/playlist_index_container';


const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/user/playlists" component={PlaylistIndexContainer} />
      </Switch>
          
    </div>
)

export default App;