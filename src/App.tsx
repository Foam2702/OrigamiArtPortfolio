import './App.css'
import AppRouter from './router/AppRouter'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme.tsx';
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
     
    </>
  )
}

export default App
