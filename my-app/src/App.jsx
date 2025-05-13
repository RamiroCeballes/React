import { useEffect, useState } from 'react';

export default function Pokemon() {
  const [posts, setPosts] = useState([]);
  const [moves, setMoves] = useState([]);
  const url = 'https://pokeapi.co/api/v2';
  useEffect(() => {
    fetch(url + '/pokemon/ditto')
      .then(r => r.json())
      .then((data) => {
        setMoves(data.moves);
        setPosts(data); 
      })
  }, []);

  return (
    <div>
      <h1>Altura de Ditto</h1>
      <p>{posts.height}</p>
      <h1>Movimientos de Ditto</h1>
      <ul>
        {moves.map((moveData, index) => (
          <li key={index}>{moveData.move.name}</li>
        ))}
      </ul>
    </div>
  );
}