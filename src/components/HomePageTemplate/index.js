import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../img/pick6golf-final.svg'
import Install from '../Install'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Image from '../Image'
import { graphql } from 'gatsby'
import { HTMLContent } from '../Content'
import Contact from '../Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
// import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

// .intro:before{
// 	content: "Todd Leads A Dual-Life";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// animation: poof 1.5s forwards;
// animation-delay: 1.5s;
// top:0 !important;
// }

.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}





@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  .pitch{font-size:250% !important; text-align:center;}
  .split {display:block !important; width:100% !important; }
  .split div{max-width:100% !important; background:tranparent !important;}
  .sidebar{margin:2rem 0;}
  .sidebar .logolink{text-align:center !important;}
  
  
}




`



const HomePageTemplate = ({
  title,
  heading,
  description,

  meta_title,
  meta_description,

}) => (
<>
  <Helmet>
    <title>{meta_title}</title>
    <meta name='description' content={meta_description} />
    <html className="fullhead" />
  </Helmet>
  
  





<CustomBox>
<div className="intro">
{/* <Intro1 /> */}
{/* <Intro2 /> */}
{/* <Intro3 /> */}




<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'0', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  

 <div className="" style={{position:'absolute', top:'60px', left:'0', width:'100vw', height:'100vh', overflow:'hidden', padding:'20px 0 0 0', border:'0px solid red', zIndex:'1',}}>
  
  

   

  
  
  
  <ScrollAnimation animateIn="fadeIn" delay={1400} offset={0} style={{position:'relative', paddingTop:'5%', overflow:'hidden', width:'100%', display:'flex', justifyContent:'center', verticalAlign:'center', alignContent:'center', alignItems: 'center',}}>
  
  <div className="container innerpanel" style={{padding:'1rem', backgroundColor:'#fff', width:'50%', borderRadius:'10px', filter:'blur(0px)',}}>
     <img className="logo" src={logo} alt="Pick 6 Logo" style={{maxHeight:'300px'}} />
     </div>
    </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={2050} style={{position:'', top:'0', right:'0',}}>
        <h3
          className="boom4 txtshadow-header mobile-txt"
          style={{
           color: 'white',
            textAlign: 'center',
            textTransform: 'normal', 
          }}
        >
        a charity tournament
        </h3>
        </ScrollAnimation>


        




        
        </div>
        
        
        

<div className="" style={{position:'fixed', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'-1',}}>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={100}>
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
   
   
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Stars" filename="Augusta_National_Golf_Club,_Hole_10_(Camellia)_-_cropped.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Camp" filename="st-andrews.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="1600px-Pebble_Beach_Golf_Links_01.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    

    

   
  </div>
</div>
</ScrollAnimation>
        </div>
        
        
        
    

</div>
</div>
















<section className="section split" style={{display:'flex', padding:'2%', position:'relative',}}>




<div className=' container split innerpanel' style={{width:'60%', padding:'2% 3%', borderRadius:'12px',}}>

<h1 className='title' style={{textAlign:'',}}>{title}</h1>
        
<div className="content" style={{margin:'2% 1% 0 0', padding:'2% 0', borderRadius:'12px',}}>

<h3 className="" style={{textAlign:'',}}>
{heading}
</h3>

</div>
<br />
{description}
 



</div>


<div className="sidebar split" style={{padding:'1%', width:'40%', marginLeft:'2%',}}>
  
  <div style={{position:'sticky', top:'30px', }}>










<div className='container innerpanel' style={{width:'', margin:'0 auto', background:'#fff', borderRadius:'12px'}}>
<iframe title="top 90 golfers" width="100%" height="350" frameBorder="0" src="https://www.tourbrassie.com/widget/index?type=index&showlogo=0&showfacebook=0&bgcolor=&width=100&height=&widthsetting=custom&unit=percent&layout=table&country=&displayplayersby=country&playerlist=&showcountry=1&showaveragepoints=0&showtotalpoints=0&showsponsor=1&tour=pga-tour&limit=90"></iframe>
</div> 




  
  

  </div>
  </div>




</section>


  
  </div>
  
  <div className="outer" style={{position:'relative', zIndex:'1'}}>
    <Contact className="container contactform" />
  </div>
  
  <br />
  
  
  </CustomBox>
  <Install />

  
  </>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
  blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
