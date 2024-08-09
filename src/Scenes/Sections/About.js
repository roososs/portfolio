import { useTranslation } from 'react-i18next'

function About({ theme, setTheme, changeLanguage }) {
  const { t, i18n } = useTranslation()
  return (
    <section id='about'>
      <div class='row-switch'>
        <div>
          <div
            className='switch-lg'
            onClick={() =>
              i18n.language === 'en'
                ? changeLanguage('fr')
                : changeLanguage('en')
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
                ></i>{' '}
                {/* {t('light_mode')} */}
              </>
            ) : (
              <>
                <i
                  class='fa-solid fa-moon'
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                ></i>
                {/* {t('dark_mode')} */}
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
          <a
            href={process.env.PUBLIC_URL + '/documents/CV.pdf'}
            download='SAFOU_SARAH_CV'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button class='secondary-button'>{t('btn_download_resume')}</button>
          </a>
        </div>
        <div class='container-icon'>
          <i class='fa-brands fa-angular fa-2xl'></i>
          <i class='fa-brands fa-html5 fa-2xl'></i>
          <i class='fa-brands fa-css3-alt fa-2xl'></i>
          <i class='fa-brands fa-java fa-2xl'></i>
          <i class='fa-brands fa-js-square fa-2xl'></i>
          <i class='fa-brands fa-php fa-2xl'></i>
          <i class='fa-brands fa-react fa-2xl'></i>
          <i class='fa-brands fa-figma fa-2xl'></i>
          <i class='fa-brands fa-git-alt fa-2xl'></i>
          <i class='fa-brands fa-github fa-2xl'></i>
          <i class='fa-brands fa-gitlab fa-2xl'></i>
          <i class='fa-brands fa-docker fa-2xl'></i>
        </div>
      </div>
    </section>
  )
}
export default About
