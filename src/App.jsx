import React from 'react';
import HeaderPage from './components/HeaderPage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import CreatePage from './pages/CreatePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { putAccessToken, getUserLogged } from './utils/api';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [authedUser, setAuthedUser] = useState(null)
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()
    setAuthedUser(data)
  }

  const onLogoutHandler = async () => {
    if (confirm('Apakah anda yakin ingin keluar?')) {
      setAuthedUser(null)
      putAccessToken('')
    }
  }

  if (authedUser == null) {
    return (
      <ThemeProvider value={{ theme, toggleTheme }}>
        <div>
          <Routes>
            <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="app-container">
        <header>
          <HeaderPage logout={onLogoutHandler} name={authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/archieve' element={<ArchivePage />} />
            <Route path='/note/:id' element={<DetailPage />} />
            <Route path='/createNote' element={<CreatePage />} />
            <Route path='/login' element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
