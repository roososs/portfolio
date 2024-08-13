import { useTranslation } from 'react-i18next'
import {
  dataEducations,
  dataExperiences,
  dataTechnologies,
  dataSkills,
} from '../data'
import { Timeline, IconList, EnumList } from '../components'

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
        <>
          <IconList icons={technologies} />
        </>
        <>
          <EnumList elements={skills} />
        </>
      </div>
    </section>
  )
}
export default Experience
