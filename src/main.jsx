import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Root from './components/Root.jsx';
import Home from './pages/Home.jsx';
import WhoAreWe from './pages/WhoAreWe.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ContactUs from './pages/ContactUs.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
     {
      path: '/',
      element: <App />
     },
     {
      path: '/home',
      element: <Home />
     },
     {
      path: '/about',
      element: <WhoAreWe />
     },
     {
      path: '/services',
      element: <Services />
     },
     {
      path: '/portfolio',
      element: <Portfolio />
     },
    {
      path: '/contact',
      element: <ContactUs />
    }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
