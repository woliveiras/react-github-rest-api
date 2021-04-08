import BaseCard from '../BaseCard'

const RepositoryCard = ({
    name,
    repoUrl,
    starts,
    license
}) => {
    return (
        <BaseCard>
        <a href={repoUrl} target='_blank' rel="noreferrer">
            <article>
                <h2>{name}</h2>
                <p>{starts}</p>
                <p>Licença: {license}</p>
            </article>
        </a>
        </BaseCard>
    )
}

export default RepositoryCard