import { useTranslation } from 'react-i18next'

function Timline({ elements }) {
  const { t } = useTranslation()
  return (
    <div className='timeline-area'>
      {elements.map((element) => {
        return (
          <div key={element.id}>
            <span className='date'>{element.date}</span>
            <div className='row-txt'>
              <span className='fst-txt'>{element.primaryTitle}</span>
              <span className='snd-txt'>{element.secondaryTitle}</span>
            </div>
            <span className='description'>{element.description}</span>
            <span className='mini-badge award' href={element.awardsLink}>
              {t('view_awards')}
            </span>
          </div>
        )
      })}
    </div>
  )
}
export default Timline
