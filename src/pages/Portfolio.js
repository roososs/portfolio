import React, { useEffect, useState } from 'react'
import { About, Contact, Experience, Projects } from '../sections'

function Portfolio({ changeLanguage }) {
  const [theme, setTheme] = useState('light-theme')
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://kit.fontawesome.com/78cbd56b65.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <div className={theme}>
      <About
        theme={theme}
        setTheme={setTheme}
        changeLanguage={changeLanguage}
      />
      <Projects changeLanguage={changeLanguage} />
      <Experience changeLanguage={changeLanguage} />
      <Contact changeLanguage={changeLanguage} />
    </div>
  )
}

export default Portfolio
