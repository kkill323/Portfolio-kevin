import React from 'react'
import CV from '../../Assets/Kevins_Resume.pdf'
import { saveAs } from "file-saver";
import {BrowserRouter as Router} from 'react-router-dom' 

// var fileDownload = require('react-file-download');
const CTA = () => {

    // saveAs(
    //     "{CTA}"
    //   );
      
    //   fileDownload(data, '{CTA}');
    

  return (
    <div className='cta'>

{/* <Link to="{CV}" target="_blank" download>Download cv 2</Link> */}
<a href= {CV} download className='btn'>Download CV</a>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>



    </div>
  );
}

export default CTA