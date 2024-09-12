import React from 'react'
import Data from './data'
import './style.css'
function AllCourses() {
    return (
        <div className='catalogBody'>
        <div className='catalog'>
            {
                Data.map((item)=>{
                    return(
                        <div className='card' key={item.id}>
                            <img className='preview' src={item.courseimg} alt="" loading='lazy' />
                            <div className='details'>
                            <p>{item.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
      )
    
}

export default AllCourses