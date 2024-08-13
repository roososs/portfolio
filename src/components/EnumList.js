function EnumList({ elements }) {
  return (
    <>
      {elements.map((element) => {
        return (
          <div key={element.title}>
            <span className='skills-category'>{element.title}</span>
            <div>
              {element.technologies.map((technology) => {
                return <span key={technology}>{technology}</span>
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
export default EnumList
