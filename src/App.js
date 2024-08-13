import { useTranslation } from 'react-i18next'
import { Portfolio } from './pages'

function App() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className='App'>
      <Portfolio changeLanguage={changeLanguage} />
    </div>
  )
}

export default App
