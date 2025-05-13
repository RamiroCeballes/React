import { useEffect, useState } from 'react';

export default function TodoList() {
  const [posts, setPosts] = useState([]);
  const url = 'https://pokeapi.co/api/v2';
  useEffect(() => {
    fetch(url + '/pokemon/ditto')
      .then(r => r.json())
      .then(data => {
        setPosts(data); 
      });
  }, []);

  return (
    <div>
      <h1>Ditto</h1>
      <p>{posts.height}</p>
    </div>
  );
}