import { useTranslation } from 'react-i18next'
import dataEducation from '../data/dataEducation'

function Experience() {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  const educations = dataEducation[language] || []
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
              <div>
                <span className='date'>MAI 2022 / AVRIL 2024</span>
                <div className='row-txt'>
                  <span className='fst-txt'>Web developer, </span>
                  <span className='snd-txt'>KPMG</span>
                </div>
                <span className='description'>
                  Développement front-end, conception d'API REST, méthodologie
                  Scrum, et utilisation des outils de gestion de version Git et
                  Microsoft Azure.
                </span>
              </div>
              <div>
                <span className='date'>DECEMBRE 2018 / FEVRIER 2022</span>
                <div className='row-txt'>
                  <span className='fst-txt'>
                    Ingénieure d'études et de Developement,{' '}
                  </span>
                  <span className='snd-txt'>Tamarisoft</span>
                </div>
                <span className='description'>
                  Développement front-end et back-end, conception d'API REST,
                  méthodologie Scrum, utilisation des outils de gestion de
                  version Git et GitLab, et développement de portails Liferay.
                </span>
              </div>
              <div>
                <span className='date'>NOVEMBRE 2018 / DECEMBRE 2018</span>
                <div className='row-txt'>
                  <span className='fst-txt'>Stage Pratique, </span>
                  <span className='snd-txt'>Tamarisoft Ex SSTI</span>
                </div>
                <span className='description'>
                  Initiation et développement de portails Liferay
                </span>
              </div>
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
