import React from 'react'
import "./services.css"
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
    
    <h5>My job experiences</h5>
    <h2>work Services done</h2>

    <div className="container services__container">
<article className="service">
<div className="service__header">
<h3>SOFTWARE ENGINEERING final project
Dalhousie youth support services September
2019–May 2020</h3>
</div>

<ul className="service__list">
<li>
<BsCheck2 className='service__list-icon'/>
<p>Used React to help create an app for managing youth
services</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>Helped in debugging and maintenance of database and
error correction.</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>Leveraged my knowledge Javascript and css with the help of
React to write interfaces to manage backup log data</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>Fixed bugs in the app contributing to an overall 10%
reduction in the sorting and searching of youth clients in
the database</p>
</li>

{/* <li>
<BsCheck2 className='service__list-icon'/>
<p>lorem, ipsum dolor sit amet consectetur elit.</p>
</li> */}


</ul>


</article>

{/* End of UI/UX design */}


{/* <article className="service">
<div className="service__header">
<h3>web development</h3>
</div>

<ul className="service__list">
<li>
<BsCheck2 className='service__list-icon'/>
<p>lorem, ipsum dolor sit amet consectetur elit</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>lorem, ipsum dolor sit amet consectetur elit.</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>lorem, ipsum dolor sit amet consectetur elit.</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>lorem, ipsum dolor sit amet consectetur elit.</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>lorem, ipsum dolor sit amet consectetur elit.</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>lorem, ipsum dolor sit amet consectetur elit.</p>
</li>

<li>
<BsCheck2 className='service__list-icon'/>
<p>lorem, ipsum dolor sit amet consectetur elit.</p>
</li>

</ul>


</article> */}

{/* End of web development */}



    </div>
    
    
    
    
    
    
    </section>
  )
}

export default Services