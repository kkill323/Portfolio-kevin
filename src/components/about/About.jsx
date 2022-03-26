import React from 'react'
import './about.css'
import ME from '../../Assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
import {GiDiploma} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

<div className="about__content">
<div className="about__cards">
<article className='about__card'>
     <FiAward className='about__icon'/>
     <h5>Experience</h5>
      <small>1 year working experience</small>

</article>

<article className='about__card'>
<FaUsers className='aboutCard__icon'/>
<h5>Clients</h5>
<small>2 clients</small>

</article>

<article className='about__card'>
<AiFillFolderOpen className='aboutCard__icon'/>
<h5>Projects</h5>
<small>2 completed projects</small>

</article>

<article className='about__card'>
<GiDiploma className='aboutCard__icon'/>
<h5>Degree</h5>
<small>bachelors in computer science, specialization in software engineering from Trent university</small> 

</article>



</div>
<p>
  Have little experience in web development but im eager to learn and always trying new things.
</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>

</div>


   </section>
  )
}

export default About