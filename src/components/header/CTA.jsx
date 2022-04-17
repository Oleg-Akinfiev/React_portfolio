import React from 'react'
import s from "./Header.module.scss"

const CTA = () => {
  return (
	 <div className={s.cta}>
		 <a className='btn' href="">Download CV</a>
		 <a className='btn btn-primary' href="#contact">Let's Talk</a>
	 </div>
  )
}

export default CTA