import BaseCard from '../BaseCard'

const UserCard = ({
    avatarUrl,
    login,
    name,
    bio,
    followers,
    following,
    location
}) => {
    console.log(avatarUrl)
    return (
        <BaseCard>  
            <img src={avatarUrl} alt={`Foto de perfil de ${name}`}/>
            <p>{name}</p>
            <p>@{login}</p>
            <p>{location}</p>
            <p>{bio}</p>
            <p>{followers} followers</p>
            <p>{following} following</p>
        </BaseCard>
    )
}

export default UserCard
