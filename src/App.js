import { Main } from './components/Main'
import ReactGA from 'react-ga'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    ReactGA.initialize('G-31LB3GQK3Y')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return <Main />
}

export default App
