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
import Card from './pages/card/Card'
import FinalProjectLayout from "./components/final-project/Layout"
import Home from './pages/final-project/Home'
import FinalProjectAbout from './pages/final-project/About'
import FinalProjectContact from './pages/final-project/Contact'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Index />} />
      <Route element={<SimpleLife />} path='simple-life'>
        <Route index element={<SplHome />} />
        <Route element={<About />} path='about' />
        <Route element={<RecentPosts />} path='recent-posts' />
      </Route>
      <Route element={<BbqHome />} path='bbq' />
      <Route element={<Card />} path='card' />
      <Route element={<FinalProjectLayout />} path='final-project'>
        <Route index element={<Home />} />
        <Route element={<FinalProjectAbout />} path='about' />
        <Route element={<FinalProjectContact />} path='contact' />
      </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
