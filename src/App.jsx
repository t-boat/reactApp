
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Categories from './pages/Categories';
import Recipes from './pages/Recipes';
import WelcomeScreen from './pages/Welcome';


export default function App() {

  const myRouter = createBrowserRouter([
    {path: '/', element: <WelcomeScreen/>},

    {path: '/recipes', element: <Recipes />},

    {path: '/categories', element: <Categories />},
  ]);


  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );

}


