// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Login from './pages/LoginPage'
import SearchHomePage from './pages/SearchHomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/underdevelop" element={<SearchHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App