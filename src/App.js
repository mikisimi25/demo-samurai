import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import AsideContainer from './components/Aside/AsideContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from 'components/common/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
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

            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />

          </main>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);