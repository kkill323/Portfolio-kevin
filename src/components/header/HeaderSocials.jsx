import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://linkedin.com" target="_blank"><AiFillLinkedin/></a>
    <a href="https://github.com" target="_blank"> <BsGithub/> </a>

</div>
  )
}

export default HeaderSocials