import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
                      <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>

          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
          <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>


            <input type="image" src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="Submit" width="100" height="50"></input>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>

            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>
            <img src="https://avatars.githubusercontent.com/u/77300333?v=4" alt="rich" width="100" height="50"></img>




        </form>
      )}
    </div>
  );
};

export default App;
