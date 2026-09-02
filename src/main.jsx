import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import ProdutoPage from './pages/ProdutoPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/produtos",
    element: <ProdutoPage/>,
  },
  {
    path: "/contato",
    element: <ContatoPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
