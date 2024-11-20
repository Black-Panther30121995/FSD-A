import React from 'react'
import MovieList from './MovieList';

const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor:"black", 
        color:"white", 
        textAlign:"center", 
        fontSize:"40px"
      }}>
        NetFlix Clone App</h1>
        <MovieList/>
    </div>
  );
};

export default App;
