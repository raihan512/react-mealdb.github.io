import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Main/Main'
import Home from './Home/Home';
import About from './About/About';
import Restuarant from './Restuarant/Restuarant';
import Error from './Error/Error';
import Items from './Items/Items';
import ItemRecipe from './ItemRecipe/ItemRecipe';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        {
          path: '/restaurant',
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          },
          element: <Restuarant></Restuarant>
        },
        {
          path: '/category/:categoryName',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`)
          },
          element: <Items></Items>
        }, {
          path: '/item/:itemName',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.itemName}`)
          },
          element: <ItemRecipe></ItemRecipe>
        },
        { path: '*', element: <Error></Error> }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
