import './App.css';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  console.log(
    process.env.NODE_ENV,
    process.env.APP_ENV,
    process.env.REACT_APP_API_URL
  );
  // https://reactrouter.com/en/main/routers/router-provider
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Page1,
    },
    {
      path: '/page1',
      Component: Page1,
    },
    {
      path: '/page2',
      Component: Page2,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
