import { useTranslation } from 'react-i18next'

function Projects() {
  const { t } = useTranslation()
  return (
    <section id='projects'>
      <div class='container'>
        <div class='header'>
          <span class='big-title'>{t('projects_title')}</span>
          <p>{t('projects_description')}</p>
          <br />
        </div>
        <div class='content'>
          <div>
            <div class='card full'>
              <span class='title'>Authentication App With React</span>
              <p>How to Build a Full-Stack Authentication App with React</p>
              <span class='link'>{t('go_to_project')}</span>
            </div>
            <div class='card empty'>
              <span class='title'>Dynamic CV</span>
              <p>Generate dynamic pdf CV with React</p>
              <span class='link'>{t('go_to_project')}</span>
            </div>
            <div class='card full'>
              <span class='title'>Documents & images store</span>
              <p>Documents & images store with React and Django</p>
              <span class='link'>{t('go_to_project')}</span>
            </div>
          </div>
          <div>
            <div class='card empty'>
              <span class='title'>Documents & images store</span>
              <p>Documents & images store with React and Java</p>
              <span class='link'>{t('go_to_project')}</span>
            </div>
            <div class='card full'>
              <span class='title'>Newsletter App</span>
              <p>Create & send custom newsletter with react & django</p>
              <span class='link'>{t('go_to_project')}</span>
            </div>
            <div class='card empty final'>
              <div class='text'>{t('more_projects')}</div>
              <div>
                <i class='fa-solid fa-hand-pointer'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
