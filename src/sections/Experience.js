import { useTranslation } from 'react-i18next'
import {
  dataEducations,
  dataExperiences,
  dataTechnologies,
  dataSkills,
} from '../data'

function Experience() {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  const educations = dataEducations[language] || []
  const experiences = dataExperiences[language] || []
  const skills = dataSkills[language] || []

  return (
    <section id='experiences-educations'>
      <div className='container'>
        <div className='header'>
          <span className='big-title'>{t('experiences_education')}</span>
        </div>
        <div className='content'>
          <div className='educations'>
            <div className='timeline-area'>
              {educations.map((education) => {
                return (
                  <div key={education.id}>
                    <span className='date'>{education.date}</span>
                    <div className='row-txt'>
                      <span className='fst-txt'>{education.primaryTitle}</span>
                      <span className='snd-txt'>
                        {education.secondaryTitle}
                      </span>
                    </div>
                    <span className='description'>{education.description}</span>
                    <span
                      className='mini-badge award'
                      href={education.awardsLink}
                    >
                      View Awards
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='experiences'>
            <div className='timeline-area'>
              {experiences.map((experience) => {
                return (
                  <div key={experience.id}>
                    <span className='date'>{experience.date}</span>
                    <div className='row-txt'>
                      <span className='fst-txt'>{experience.primaryTitle}</span>
                      <span className='snd-txt'>
                        {experience.secondaryTitle}
                      </span>
                    </div>
                    <span className='description'>
                      {experience.description}
                    </span>
                    <span
                      className='mini-badge award'
                      href={experience.awardsLink}
                    >
                      View Awards
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className='header'>
          <span className='big-title'>{t('skills')}</span>
        </div>
        <div className='container-icon'>
          {dataTechnologies.map((technology) => {
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
