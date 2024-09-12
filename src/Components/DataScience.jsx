import React from 'react'
import Data from './data'

function DataScience() {
    return (
        <div className='catalogBody'>
        <div className='catalog'>
            {
                Data.map((item)=>{
                    return(
                        item.category === 'Data science'?
                        <div className='card' key={item.id}>
                            <img className='preview' src={item.courseimg} alt="" loading='lazy' />
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

export default DataScience