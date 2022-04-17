import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>

    <a href='https://www.linkedin.com/in/kevin-dsane-selby-199b11169/' target="_blank" rel="noreferrer" ><AiFillLinkedin/></a>
    <a href="https://github.com/kkill323" target="_blank" rel="noreferrer"> <BsGithub/> </a>

</div>
  )
}

export default HeaderSocials