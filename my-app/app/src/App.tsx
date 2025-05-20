import { useEffect, useState } from 'react';
import Navegacion from './nav/nav';

interface Move {
  move: {
    name: string;
    url: string;
  };
}

interface PokemonData {
  height: number;
  sprites: {
    back_default: string;
  };
  moves: Move[];
}

export default function Pokemon() {
  const [posts, setPosts] = useState<PokemonData | null>(null);
  const [moves, setMoves] = useState<Move[]>([]);
  const [imagen, setImagen] = useState<string>('');
  const url = 'https://pokeapi.co/api/v2';

  useEffect(() => {
    fetch(url + '/pokemon/ditto')
      .then(r => r.json())
      .then((data: PokemonData) => {
        setMoves(data.moves);
        setPosts(data);
        setImagen(data.sprites.back_default);
      });
  }, []);

  return (
    <><Navegacion></Navegacion><div>
      <h1>Altura de Ditto</h1>
      <p>{posts?.height ?? 'Cargando...'}</p>

      <h1>Movimientos de Ditto</h1>
      <ul>
        {moves.map((moveData, index) => (
          <li key={index}>{moveData.move.name}</li>
        ))}
      </ul>

      {imagen && <img src={imagen} alt="Ditto" />}
    </div></>
  );
}