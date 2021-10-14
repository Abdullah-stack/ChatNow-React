import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './icons/fontawesome-free-5.15.4-web/css/all.css';
import RouterApp from './router/router';

function App() {
  return (
    <div className="App">
      <RouterApp />
    </div>  
  );
}

export default App;