import './Heading.sass'

const Heading = ({text, type = 'title', children}) => {
    const headingTypes = {
        title: 'h1',
        subtitle: 'h2',
        intertitle: 'h3'
    }
    const HTMLTag = headingTypes[type]
    return (
        <HTMLTag className={`heading--${type}`}>
            {children ? children : text}
        </HTMLTag>
    )
}

export default Heading