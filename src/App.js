import MovieListe from './MovieListe'
import React, {useState} from 'react';


function App() {
  
const [movies,setMovies] = useState([
  {
    image:
      "https://s2.gaming-cdn.com/images/products/7171/orig/tomb-raider-underworld-cover.jpg",
    name: "tomb raider",
    rate: "5",
    description: "fchgvgjvb",
  },
  {
    image:
      "https://lasueur.com/wp-content/uploads/2017/11/Hitman-John-Wick.jpg",
    name: "hitman",
    rate: "10",
    description: "gvb",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81SHZnXeJaL._AC_SY445_.jpg",
    name: "maxpayne",
    rate: "6",
    description: "hbvj",
  },
]);


  return (
    <div className="App">
      <MovieListe movies={movies}/>
    
    </div>
  );
  }

export default App;
