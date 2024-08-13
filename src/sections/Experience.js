import { useTranslation } from 'react-i18next'
import {
  dataEducations,
  dataExperiences,
  dataTechnologies,
  dataSkills,
} from '../data'
import { Timeline } from '../components'

function Experience() {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  const educations = dataEducations[language] || []
  const experiences = dataExperiences[language] || []
  const skills = dataSkills[language] || []
  const technologies = dataTechnologies[language] || []

  return (
    <section id='experiences-educations'>
      <div className='container'>
        <div className='header'>
          <span className='big-title'>{t('experiences_education')}</span>
        </div>
        <div className='content'>
          <div className='educations'>
            <Timeline elements={educations} />
          </div>
          <div className='experiences'>
            <Timeline elements={experiences} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className='header'>
          <span className='big-title'>{t('skills')}</span>
        </div>
        <div className='container-icon'>
          {technologies.map((technology) => {
            return <i className={`fa-brands ${technology.icon} fa-2xl`}></i>
          })}
        </div>
        <>
          {skills.map((skill) => {
            return (
              <div>
                <span className='skills-category'>{skill.title}</span>
                <div>
                  {skill.technologies.map((technology) => {
                    return <span>{technology}</span>
                  })}
                </div>
              </div>
            )
          })}
        </>
      </div>
    </section>
  )
}
export default Experience
