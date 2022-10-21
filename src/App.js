import React from 'react';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import UserProfile from './components/userProfile';

function App() {
  return (
    <>
      <LoginButton/>
      <LogoutButton/>
      <p>The user information</p>
      <UserProfile/>
    </>
  );
}

export default App;
