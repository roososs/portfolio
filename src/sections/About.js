import { useTranslation } from 'react-i18next'
import { IconList } from '../components'
import { dataTechnologies } from '../data'

function About({ theme, setTheme, changeLanguage }) {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  const technologies = dataTechnologies[language] || []
  return (
    <section id='about'>
      <div class='row-switch'>
        <div>
          <div
            className='switch-lg'
            onClick={() =>
              language === 'en' ? changeLanguage('fr') : changeLanguage('en')
            }
          >
            <i class='fa-solid fa-language'></i>
          </div>
        </div>
        <div className='switch-color'>
          <span
            onClick={() =>
              theme === 'dark-theme'
                ? setTheme('light-theme')
                : setTheme('dark-theme')
            }
          >
            {theme === 'dark-theme' ? (
              <>
                <i
                  class='fa-solid fa-sun'
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                ></i>
              </>
            ) : (
              <>
                <i
                  class='fa-solid fa-moon'
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                ></i>
              </>
            )}
          </span>
        </div>
      </div>

      <div class='container top'>
        <span>Portfolio.</span>
        <span class='owner-name'>SAFOU Sarah Meriem</span>
      </div>
      <div class='container bottom'>
        <div class='header'>
          <span class='big-title'>{t('greeting')}</span>
          <br />
          <p>{t('introduction')}</p>
          <br />
          <a href='https://www.linkedin.com/in/sarah-safou-a885b2122/'>
            <button class='primary-button'>{t('btn_contact_me')}</button>
          </a>
          {/* <a
          // href={process.env.PUBLIC_URL + '/documents/CV.pdf'}
          // download='SAFOU_SARAH_CV'
          // target='_blank'
          // rel='noopener noreferrer'
          > */}
          <button class='secondary-button'>{t('btn_download_resume')}</button>
          {/* </a> */}
        </div>
        <>
          <IconList icons={technologies} />
        </>
      </div>
    </section>
  )
}
export default About
