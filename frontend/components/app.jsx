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
import HomeContainer from './home/home_container';
import CreatePlaylistContainer from './playlists/create_playlist_container'


const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path='/home' component={HomeContainer} />
        <AuthRoute exact path='/create' component={CreatePlaylistContainer} />
      </Switch>
          
    </div>
)

export default App;
