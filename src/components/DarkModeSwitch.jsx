import React, { useEffect, useState } from 'react'

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    if(isDarkMode) 
    {
      setIsDarkMode(false)
      localStorage.setItem('darkmode', 'off');
      document.documentElement.classList.remove('dark')
    }
    else
    {
      setIsDarkMode(true)
      localStorage.setItem('darkmode', 'on');
      document.documentElement.classList.add('dark')
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkmode')

    if(savedTheme === 'on' || (!savedTheme && window.matchMedia('prefers-color-scheme: dark').matches)) 
      {
        setIsDarkMode(true)
        document.documentElement.classList.add('dark')
      }
      else
      {
        setIsDarkMode(false)
        document.documentElement.classList.remove('dark')
      }



  }, [])

  return (
    <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />   
        <span className="slider round"></span>
    </label>
    
  )
}

export default DarkModeSwitch