import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client';

  const theme = createTheme({
    palette: {
      mode: 'light', // o 'light'
      primary: { main:'rgb(210, 176, 25)' },
      secondary: { main:'rgb(173, 120, 183)' },
    },
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
<ThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </ThemeProvider>
)

