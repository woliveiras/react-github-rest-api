import BaseCard from '../BaseCard'
import Separator from '../Separator'

import './UserCard.sass'

const UserCard = ({
  avatarUrl,
  login,
  name,
  bio,
  followers,
  following,
  location
}) => {
  return (
    <BaseCard className='usercard'>
      <img className='usercard__avatar' src={avatarUrl} alt={`Foto de perfil de ${name}`} />
      <strong>{name}</strong>
      <p>@{login}</p>
      {location && (<p>{location}</p>)}
      <Separator />
      <p>{bio}</p>
      <p><strong>{followers}</strong> followers</p>
      <p><strong>{following}</strong> following</p>
    </BaseCard>
  )
}

export default UserCard
