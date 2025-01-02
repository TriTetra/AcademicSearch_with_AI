// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Login from './pages/LoginPage'
import SearchHomePage from './pages/SearchHomePage'
import Terms from './pages/Terms'
import UsagePolicy from './pages/UsagePolicy'
import Privacy from './pages/Privacy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/underdevelop" element={<SearchHomePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/usage-policy" element={<UsagePolicy />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App