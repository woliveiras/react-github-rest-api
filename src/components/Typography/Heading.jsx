import './Heading.sass'

const Heading = ({text, type}) => {
    const headingTypes = {
        title: 'h1',
        subtitle: 'h2',
        intertitle: 'h3'
    }
    const HTMLTag = headingTypes[type]
    return (<HTMLTag className={`heading--${type}`}>{text}</HTMLTag>)
}

export default Heading