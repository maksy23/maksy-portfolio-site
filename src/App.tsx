import { Route, Routes } from 'react-router-dom'

import HeaderFooterLayout from './components/layout/header-footer-layout'
import About from './pages/about/index'
import Contact from './pages/contact/index'
import Home from './pages/home/index'
import Projects from './pages/projects/index'

function App() {
  return (
    <Routes>
      <Route element={<HeaderFooterLayout />}>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/projects'
          element={<Projects />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Route>
    </Routes>
  )
}

export default App
