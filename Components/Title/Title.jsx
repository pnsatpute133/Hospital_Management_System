/* --- type rafce for code snippet ---*/
import React from 'react'
import'./Title.css'/* import css file */

const Titel = ({subTitle,title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
      
    </div>
  )
}

export default Titel
