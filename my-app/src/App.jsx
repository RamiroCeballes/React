import { useEffect, useState } from 'react';

export default function TodoList() {
  const [posts, setPosts] = useState([]); // Estado para guardar los datos
  const url = 'https://pokeapi.co/api/v2';
  useEffect(() => {
    fetch(url + '/pokemon/ditto')
      .then(r => r.json())
      .then(data => {
        setPosts(data); // Guardamos los datos en el estado
      });
  }, []);

  return (
    <div>
      <h1>Ditto</h1>
      <p>{posts.height}</p>
    </div>
  );
}