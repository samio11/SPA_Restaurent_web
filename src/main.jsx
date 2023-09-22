import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Products from './Products'
import SelectedDish from './SelectedDish'
const myWebPagePaths = createBrowserRouter([{
  path : '/',
  element : <Home></Home>,
  loader : ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
},{
  path : '/MultipleProduct/:name',
  element : <Products></Products>,
  loader : (para)=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${para.params.name}`)
},{
  path : '/:details',
  element : <SelectedDish></SelectedDish>,
  loader : (para)=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${para.params.details}`)
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myWebPagePaths}></RouterProvider>
  </React.StrictMode>,
)
