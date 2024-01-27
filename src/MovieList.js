// MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = () => {
  // Sample movie data
  const movies = [
    {
      title: 'Finding Nemo',
      image: 'https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg',
      synopsis: 'An animated adventure film about a clownfish searching for his son.',
      rating: 5
    },
    {
      title: 'Monster Inc',
      image: 'https://lumiere-a.akamaihd.net/v1/images/p_monstersinc_19751_55afa07a.jpeg',
      synopsis: 'A story about monsters in the closet and the energy they collect from children\'s screams.',
      rating: 4
    },
    // Add more movie data as needed
  ];

  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
