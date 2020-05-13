
import React from 'react'
import Layout from '../components/Layout'
// import Install from '../components/Install'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/Gallery'
import Image from '../components/Image'
// import { Link } from 'gatsby'
import Contact from '../components/Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import GalleryMenu from '../components/GalleryMenu'
// import { FiZoomIn } from 'react-icons/fi'
// import PopSemi from '../components/PopSemi'

import styled from "styled-components"
const CustomBox = styled.div`
.intro:before{
	content: "Got an idea?";
	white-space: pre-wrap; /* or pre-wrap */
position:absolute;
display: flex;
align-items: center;
justify-content: center;
z-index:1;
font-size:450%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px white;
animation: poof 1s forwards;
animation-delay: 1s;
}





.speech:after {
	content: '';
position: absolute;
top: 30%;
right: -58px;
width: 0;
height: 0;
	border: 60px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

@media (min-width: 50rem) {
.speech1{padding:20px 50px !important;}
}

@media (max-width: 48rem) {
.intro:before{font-size:200%;}
.speech:after {right: -28px;}
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/





`


const Custom = graphql`
  query Custom {
    allFile(filter: { relativeDirectory: { eq: "favorites" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Gal1Page = () => {
  const data = useStaticQuery(Custom)
  return (
	  <CustomBox>
    <Layout>

<section className="intro about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>


<div className="container" style={{margin:'1rem 8%',}}>
<h3 className="" style={{textAlign:'center', fontSize:'250%',}}>
We'd love to hear your idea!
</h3>
</div>




 
 
 
 
 









<div className="container">

<p>We love collaborating and working on custom pieces as nothing makes us happier than making you happy.</p>

<o>We can integrate your own materials and we love making personalized mementos and memorial pieces such as clothing from a loved one, a fallen here's uniform, etc...</o>

<p>We'd be honored to help you honor the memory of your loved one.</p>
</div>


</section>




<section className="intro section" style={{display:'none'}}>



      <div className="container" style={{background:'', padding:'2rem',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
</section>



<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>




 <ScrollAnimation animateIn="bounceInUp" animateOut="bounceOutDown" animateOnce={false} delay={100} style={{ zIndex:'1', display:'none',}}>
<div className="container">
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
Client List
</h3>
</div>
</ScrollAnimation>





 
 
</section>


<br />
<br />
    

<div className="content outer">
    <Contact />
    </div>


      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
