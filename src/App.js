import { useLayoutEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Pages from './container/pages';
import { ThemeProvider, createTheme } from "@mui/material";
import { useDispatch } from 'react-redux';
import { getAdminCredetials, thchangeAuAC } from './store/actions/authAction';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000'
    }
  }
});


function App() {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    if (localStorage.getItem("autorization-token")) {
      dispatch(thchangeAuAC(true))
      dispatch(getAdminCredetials())
      return
    }
    return
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Pages />
      </div>
    </ThemeProvider >
  );
}

export default App;
