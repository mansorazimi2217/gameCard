import React from 'react'
import './SingleCard.css'
 function SingleCard({card}) {
  return (
    <div className='card'>
        <div>
          <img src={card.src} alt="sky" className='front'/>
            <img src="/images/image_downloader_1693235952817.jpg" alt="sky" className='back'/>
        </div>
    </div>
  )
}
export default SingleCard;
