import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/material/Container';

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

export default function App() {

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
    <><AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Aplicación
          </Typography>
          <Button color="inherit">Inicio</Button>
        </Toolbar>
      </Container>
    </AppBar><Container sx={{ mt: 4 }}>
        <Button variant="contained">Enviar</Button>
        <Button variant="outlined" color="secondary">Cancelar</Button>
        <Button variant="text" disabled>Desactivado</Button>
        <Button startIcon={<DeleteIcon />} color="error">
          Borrar
        </Button>
        <Button endIcon={<EditIcon />}>Editar</Button>

        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal" />

        <FormControlLabel control={<Checkbox />} label="Acepto términos" />

        <Card sx={{ maxWidth: 300, margin: '1rem 0' }}>
          <CardContent>
            <Typography variant="h5">Título</Typography>
            <Typography variant="body2">Descripción breve del contenido.</Typography>
            <Button variant="contained">Comprar</Button>
          </CardContent>
        </Card>

        <Typography variant="h6">Altura de Ditto</Typography>
        <p>{posts?.height ?? 'Cargando...'}</p>

        <Typography variant="h6">Movimientos de Ditto</Typography>
        <ul>
          {moves.map((moveData, index) => (
            <li key={index}>{moveData.move.name}</li>
          ))}
        </ul>

        {imagen && <img src={imagen} alt="Ditto" />}
      </Container></>

  );
}