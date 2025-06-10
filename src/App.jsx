import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CardapioPage from './pages/CardapioPage'; // We will create this page next

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Darker green
    },
    secondary: {
      main: '#ffc107', // Amber for contrast
    },
    background: {
      default: '#f5f5f5', // Light grey background
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            pizzademo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<CardapioPage />} />
          {/* Add other routes here later, e.g., for editing or adding items */}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
