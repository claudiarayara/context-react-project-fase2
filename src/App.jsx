import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import ListaCarros from './pages/ListaCarros.jsx';
import AdicionarCarros from './pages/AdicionarCarro.jsx';

function App() {
  const [carros, setCarros] = useState([]);

  const addCarros = (novoCarro) => {
    setCarros([...carros, novoCarro]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Home />
    },
    {
      path: "/sobre",
      element: <Sobre />
    },
    {
      path: "/listadecarros",
      element: <ListaCarros carros={carros} />
    },
    {
      path: "/adicionarcarro",
      element: <AdicionarCarros onAddCarros={addCarros} />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
