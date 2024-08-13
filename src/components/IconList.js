function IconList({ icons }) {
  return (
    <div className='container-icon'>
      {icons.map((icon) => {
        return <i className={`fa-brands ${icon.icon} fa-2xl`}></i>
      })}
    </div>
  )
}
export default IconList
