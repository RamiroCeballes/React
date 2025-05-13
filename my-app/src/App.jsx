import { useEffect, useState } from 'react';

export default function TodoList() {
  const [posts, setPosts] = useState([]);
  const [moves, setMoves] = useState([]);
  const url = 'https://pokeapi.co/api/v2';
  useEffect(() => {
    fetch(url + '/pokemon/ditto')
      .then(r => r.json())
      .then((data) => {
        setMoves(data.moves);
      })
      .then(data => {
        setPosts(data); 
      });
  }, []);

  return (
    <div>
      <h1>Movimientos de Ditto</h1>
      <ul>
        {moves.map((moveData, index) => (
          <li key={index}>{moveData.move.name}</li>
        ))}
      </ul>
    </div>
  );
}