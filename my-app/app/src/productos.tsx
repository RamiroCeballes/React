import { TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function Productos() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (name.length < 2) {
      alert('El nombre debe tener al menos 2 letras');
      return;
    }
   if (!email.includes('@')) {
      alert('El email debe contener un "@"');
      return;
    }
    alert(`Formulario enviado por ${name}`);

  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}