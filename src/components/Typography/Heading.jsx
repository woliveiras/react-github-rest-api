import './Heading.sass'

const Heading = ({ text = null, type = 'title', children = null }) => {
  const headingTypes = {
    title: 'h1',
    subtitle: 'h2',
    intertitle: 'h3'
  }
  const HTMLTag = headingTypes[type]
  return (
    <HTMLTag className={`heading--${type}`}>
      {children || text}
    </HTMLTag>
  )
}

export default Heading
