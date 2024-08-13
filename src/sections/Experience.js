import { useTranslation } from 'react-i18next'
import dataEducation from '../data/dataEducations'
import dataExperience from '../data/dataExperiences'

function Experience() {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  const educations = dataEducation[language] || []
  const experiences = dataExperience[language] || []
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
          <i className='fa-brands fa-angular fa-2xl'></i>
          <i className='fa-brands fa-html5 fa-2xl'></i>
          <i className='fa-brands fa-css3-alt fa-2xl'></i>
          <i className='fa-brands fa-java fa-2xl'></i>
          <i className='fa-brands fa-js-square fa-2xl'></i>
          <i className='fa-brands fa-php fa-2xl'></i>
          <i className='fa-brands fa-react fa-2xl'></i>
          <i className='fa-brands fa-figma fa-2xl'></i>
          <i className='fa-brands fa-git-alt fa-2xl'></i>
          <i className='fa-brands fa-github fa-2xl'></i>
          <i className='fa-brands fa-gitlab fa-2xl'></i>
          <i className='fa-brands fa-docker fa-2xl'></i>
        </div>
        <div>
          <span className='skills-category'>Front-end</span>
          <div>
            <span>HTML,</span>
            <span>CSS,</span>
            <span>Javascript</span>
          </div>
        </div>
        <div>
          <span className='skills-category'>Back-end</span>
          <div>
            <span>PHP,</span>
            <span>Java,</span>
            <span>Spring Boot,</span>
            <span>JHipster,</span>
            <span>Microservices,</span>
            <span>API Rest</span>
          </div>
        </div>
        {/* <div>
          <span className='skills-category'>Devops</span>
          <div>
            <span>Docker,</span>
            <span>Kubernetes,</span>
            <span>Jenkins</span>
          </div>
        </div> */}
        <div>
          <span className='skills-category'>Base De données</span>
          <div>
            <span>My SQL,</span>
            <span>PostgreSQL</span>
          </div>
        </div>
        <div>
          <span className='skills-category'>Autre</span>
          <div>
            <span>Figma,</span>
            <span>Scrum,</span>
            <span>Git,</span>
            <span>GitLab</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
