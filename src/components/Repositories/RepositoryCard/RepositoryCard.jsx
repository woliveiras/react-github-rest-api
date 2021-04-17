import { GoStar, GoRepo } from 'react-icons/go'

import { BaseCard } from '../../Cards'
import Heading from '../../Typography/Heading'
import Separator from '../../Separator'

const RepositoryCard = ({
  name = null,
  repoUrl = null,
  starts = null,
  description = null,
  license = null
}) => (
  <BaseCard>
    <a href={repoUrl} target='_blank' rel='noreferrer'>
      <article>
        <Heading type='intertitle'><GoRepo /> {name}</Heading>
        <p><GoStar /> {starts}</p>
        {description && (<p>{description}</p>)}
        {license && (
          <>
            <Separator />
            <p>Licença: {license}</p>
          </>
        )}
      </article>
    </a>
  </BaseCard>
)

export default RepositoryCard
