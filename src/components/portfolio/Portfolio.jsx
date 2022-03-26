import React from 'react'
import './portfolio.css'
// import IMG1 from '../../Assets/portfolio1.png'
import IMG2 from '../../Assets/portfolio2.png'
import IMG3 from '../../Assets/portfolio3.png'


const data = [
// {
//   id: 1,
//   image: IMG1,
//   title: "simon game",
//   github: 'https://github.com/',
//   demo: 'placeholder using heroku'
// },

{
  id: 2,
  image: IMG2,
  title: "Daily Blog",
  github: 'https://github.com/kkill323/Blog-with-Database/',
  demo: 'https://daily-blog-kevin-selby.herokuapp.com/'
},

{
  id: 3,
  image: IMG3,
  title: "To do list",
  github: 'https://github.com/',  //replace with your github project link
  demo: 'https://todolist-v2-kevin.herokuapp.com/'
}
]


const Portfolio = () => {
  return (
    <section id='portfolio'> 
  <h5>My recent Work</h5>
<h2>Portfolio</h2> 



    <div className="container portfolio__container">
    {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article  key={id} className='portfolio__items'>
          <div className="portfolio__item-image">
          <img src={image} alt={title}/>
           </div>
<h3>{title}</h3>
<div className="portfolio__item-cta">
<a href={github} className='btn' tarfet='_blank'>Github</a>
<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>


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