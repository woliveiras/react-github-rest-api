import { BaseCard } from '../Cards'
import Separator from '../Separator'

import './UserCard.sass'

const UserCard = ({
  avatarUrl = null,
  login = null,
  name = null,
  bio = null,
  followers = null,
  following = null,
  location = null
}) => (
  <BaseCard className='usercard'>
    <img
      className='usercard__avatar'
      src={avatarUrl}
      alt={`Foto de perfil de ${name}`} />
    <strong>{name}</strong>
    <p>@{login}</p>
    {location && (<p>{location}</p>)}
    <Separator />
    <p>{bio}</p>
    <p><strong>{followers}</strong> followers</p>
    <p><strong>{following}</strong> following</p>
  </BaseCard>
)

export default UserCard
