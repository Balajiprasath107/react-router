import { createBrowserRouter, Routes, Route, Link, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import './Components/style.css'
import AllCourses from './Components/All'
import Cybersecurity from './Components/Cybersecurity'
import AiCourses from './Components/AiCourses'
import DataScience from './Components/DataScience'


import Rootlayout from './Components/Rootlayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
        <Route path='/' element={<AllCourses />} />
        <Route path='Cybersecurity' element={<Cybersecurity />} />
        <Route path='AI' element={<AiCourses />} />
        <Route path='DataScience' element={<DataScience />} />
      </Route>
    )
  )
  return (
    // <BrowserRouter>
    //   <main>

    //   </main>
    // </BrowserRouter>
    <RouterProvider router={router} />
  )
}

export default App
