import React, { useEffect, useState } from 'react'
import { About, Contact, Experience, Projects } from '../sections'
import { useScript } from '../hooks'

function Portfolio({ changeLanguage }) {
  const [theme, setTheme] = useState('light-theme')
  useScript('https://kit.fontawesome.com/78cbd56b65.js')
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
