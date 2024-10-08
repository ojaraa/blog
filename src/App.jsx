import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Discover from './pages/Discover'
import BlogFullDetails from './pages/BlogFullDetails'
import Error from './pages/Error'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/discover' element={ <Discover/>} />
        <Route path='/blogs/:id' element={ <BlogFullDetails /> } />
        <Route path='*' element={<Error/>} />
        <Route  element={<Error/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
