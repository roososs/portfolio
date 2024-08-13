import { useTranslation } from 'react-i18next'
import dataProjects from '../data/dataProjects'

function Projects() {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  const projects = dataProjects[language] || []
  return (
    <section id='projects'>
      <div className='container'>
        <div className='header'>
          <span className='big-title'>{t('projects_title')}</span>
          <p>{t('projects_description')}</p>
          <br />
        </div>
        <div className='content'>
          {projects.map((project) => {
            return (
              <div key={project.id} className={`card ${project.style}`}>
                <span className='title'>{project.title}</span>
                <p>{project.description}</p>
                <span className='link' href={project.link}>
                  {t('go_to_project')}
                </span>
              </div>
            )
          })}
          <div className='card empty final'>
            <div className='text'>{t('more_projects')}</div>
            <div>
              <i className='fa-solid fa-hand-pointer'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
