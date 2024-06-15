import React from 'react'
import '../App.css'
import './Card.css'
function Card(props) {

    const changeFun = () =>{
       props.onChangeFun(props.onArrayImges)
    }

  return (


    
    <div >
         {
            <div className='card-grid'>
                {
                    props.onArrayImges.map((card) => (
                        <div className='card' key={card.id}>
                           <div>
                               <img onClick={changeFun} style={{
                                border :"1px solid white", 
                                borderRadius :"10px"
                                }}
                               className='front' 
                               src={card.src} 
                               alt="cart front" 
                               />

                               <img style={{
                                border :"1px solid white",
                                borderRadius : "10px"
                                }} className='back' 
                                src="/images/image_downloader_1693235952817.jpg"
                                alt="card back" 
                                onClick={changeFun}/>
                           </div>
                        </div>
                    ))
                }
            </div>
         }
    </div>
  )
}

export default Card;