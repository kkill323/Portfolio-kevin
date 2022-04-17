import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.png'
import IMG2 from '../../Assets/portfolio2.png'
import IMG3 from '../../Assets/portfolio3.png'


const data = [
{
  id: 1,
  image: IMG1,
  title: "Portfolio site",
  github: 'https://github.com/kkill323/portfolio-kevin',
  demo: 'http://kevinselby.online/',
  languagesUsed: " HTML, css, Emailjs, React, SwiperJS",
},

{
  id: 2,
  image: IMG2,
  title: "Daily Blog",
  github: 'https://github.com/kkill323/Blog-with-Database/',
  demo: 'https://daily-blog-kevin-selby.herokuapp.com/',
  languagesUsed: " EJS, Express, mongoDB, Html, CSS, Javascript, NPM",
},

{
  id: 3,
  image: IMG3,
  title: "To do list",
  github: 'https://github.com/kkill323/todo-list',  //replace with your github project link
  demo: 'https://todolist-v2-kevin.herokuapp.com/',
  languagesUsed: " EJS, Express, mongoDB, body paser, CSS, Javascript, NPM, Heroku",
}
]


const Portfolio = () => {
  return (
    <section id='portfolio'> 
  <h5>My recent Work</h5>
<h2>Portfolio</h2> 



    <div className="container portfolio__container">
    {
      data.map(({id, image, title, github, demo, languagesUsed}) => {
        return (
          <article  key={id} className='portfolio__items'>
          <div className="portfolio__item-image">
          <img src={image} alt={title}/>
           </div>
<h3>{title}</h3>
<h3>Languages Used: "{languagesUsed}"</h3>
<div className="portfolio__item-cta">
<a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
<a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>



</div>
          </article>
        )
      }
      
      
      
       )
    }
  

 
     </div>
    
     </section>
  )
}


export default Portfolio