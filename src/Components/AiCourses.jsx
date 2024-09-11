import React from 'react'
import Data from './data'

function AiCourses() {
    return (
        <div className='catalogBody'>
        <div className='catalog'>
            {
                Data.map((item)=>{
                    return(
                        item.category === 'AI'?
                        <div className='card' key={item.id}>
                            <img className='preview' src={item.courseimg} alt="" />
                            <div className='details'>
                            <h3>{item.name}</h3>
                            </div>
                        </div>:null
                    )
                })
            }
        </div>
        </div>
    )
}

export default AiCourses