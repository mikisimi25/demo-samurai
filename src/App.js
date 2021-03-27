import React, { Component, lazy } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import AsideContainer from './components/Aside/AsideContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from 'components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { withSuspense } from 'hoc/withSuspense';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
class App extends Component {
  catchAllUnhandkedErrors = (promiseRejectionEvent) => {
    alert('Some error occured');
    //console.error(promiseRejectionEvent);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandkedErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandkedErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <AsideContainer />

          <main className='app-wrapper-content'>
            <Switch>
              <Route exact path='/' render={() => <Redirect to={'/profile'} /> } />
              <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
              <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <Login />} />
              <Route path='*' render={() => '404 NOT FOUND'} />
            </Switch>
          </main>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;