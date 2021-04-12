import RepositoryCard from '../RepositoryCard'

const RepositoryList = ({ repositories = [] }) => {
  const hasRepositories = repositories?.length > 0

  return (
    <>
      {hasRepositories &&
        <ul>
          {repositories.map(repo =>
            (
              <li key={repo.name}>
                <RepositoryCard
                  name={repo.name}
                  repoUrl={repo.html_url}
                  starts={repo.stargazers_count}
                  license={repo.license?.name}
                  description={repo.description}
                />
              </li>
            ))}
        </ul>}
    </>
  )
}

export default RepositoryList
