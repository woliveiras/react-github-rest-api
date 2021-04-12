import './BaseCard.sass'

const BaseCard = ({ children = null }) => (
  <div className='basecard'>
    {children}
  </div>
)

export default BaseCard
