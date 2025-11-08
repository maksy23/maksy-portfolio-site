import { Route, Routes } from 'react-router-dom'

import HeaderFooterLayout from './components/layout/header-footer-layout'
import About from './pages/about/index'
import Contact from './pages/contact/index'
import Home from './pages/home/index'
import Projects from './pages/projects/index'
import { ThemeProvider } from './providers/theme-provider'

function App() {
  return (
    <ThemeProvider
      defaultTheme='dark'
      storageKey='vite-ui-theme'
    >
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
    </ThemeProvider>
  )
}

export default App
