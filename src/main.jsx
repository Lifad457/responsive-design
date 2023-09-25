import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import NotFound from './components/NotFound'
import SimpleLife from './components/simple-life/Layout'
import SplHome from './pages/simple-life/Home'
import About from './pages/simple-life/About'
import RecentPosts from './pages/simple-life/RecentPosts'
import BbqHome from './pages/bbq/Home'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Index />} />
      <Route element={<SimpleLife />} path='simple-life'>
        <Route index element={<SplHome />} />
        <Route element={<About />} path='about' />
        <Route element={<RecentPosts />} path='recent-posts' />
      </Route>
      <Route element={<BbqHome />} path='bbq' />
    <Route path='*' element={<NotFound />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
