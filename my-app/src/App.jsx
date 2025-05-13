import { useEffect, useState } from 'react';

export default function TodoList() {
  const [posts, setPosts] = useState([]); // Estado para guardar los datos

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
      .then(data => {
        setPosts(data); // Guardamos los datos en el estado
      });
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
