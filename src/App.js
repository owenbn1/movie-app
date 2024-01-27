import './App.css';
import React from 'react';
import MovieList from './MovieList';

const App = () => (
  <div>
    <h1 className='container text-center mx-md mx-auto text-primary mb-6'>Movie Voting and Reviews App</h1>
    <MovieList />
  </div>
);

export default App;
