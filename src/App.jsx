import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './Home'
import { Footer } from './components/Footer'
import { AboutUs } from './AboutUs'
import { Products } from './Products'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App