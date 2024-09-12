import React from 'react'
import Data from './data'
function Cybersecurity() {
  return (
    <div className='catalogBody'>
    <div className='catalog'>
        {
            Data.map((item)=>{
                return(
                    item.category === 'cyber security'?
                    <div className='card' key={item.id}>
                        <img className='preview' src= {item.courseimg} alt="" loading='lazy' />
                        <div className='details'>
                        <p>{item.name}</p>
                        </div>
                    </div>:null
                )
            })
        }
    </div>
    </div>
  )
}

export default Cybersecurity