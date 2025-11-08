import Home from './pages/home/index'
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider'

function App() {
  return (
    <ThemeProvider
      defaultTheme='system'
      storageKey='vite-ui-theme'
    >
      <Home />
    </ThemeProvider>
  )
}

export default App
