import './BaseCard.sass'

const BaseCard = ({ children = null }) => {
  return (
    <div className='basecard'>
      {children}
    </div>
  )
}

export default BaseCard
