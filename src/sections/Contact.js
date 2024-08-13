import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  return (
    <footer>
      <div class='top'>
        <div>
          <span class='big-title'>{t('contact_title')}</span>
          <br />
          <p>{t('contact_description')}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          {/* <a
          // href={process.env.PUBLIC_URL + '/documents/CV.pdf'}
          // download='SAFOU_SARAH_CV'
          // target='_blank'
          // rel='noopener noreferrer'
          > */}
          <button class='secondary-button'>{t('btn_download_resume')}</button>
          {/* </a> */}
          <span class='beetwen-button'>Ou</span>
          <a href='https://www.linkedin.com/in/sarah-safou-a885b2122/'>
            <button class='primary-button'>{t('btn_connect_linkdin')}</button>
          </a>
        </div>
        <div class='cont-txt'>
          <span>Portfolio.</span>
        </div>
      </div>
      <div class='bottom'>
        <div>
          <span>{t('copyright')}</span>
        </div>
      </div>
    </footer>
  )
}
export default Contact
