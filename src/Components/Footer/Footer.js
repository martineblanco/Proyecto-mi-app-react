import React from 'react'
import {IoLogoInstagram, IoLogoFacebook, IoLogoGithub} from "react-icons/io5";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='copy'>
         <p>Copyright &copy; 2023</p>
      </div>
      <div>
        <a className='linksFooter'    href='https://www.instagram.com/' >< IoLogoInstagram size={30} /></a>
        <a className='linksFooter'    href='https://www.facebook.com/' ><IoLogoFacebook size={30} /></a>
        <a className='linksFooter'    href='https://github.com/' ><IoLogoGithub size={30}/></a>
      </div>
     
     
    </footer>
    
  )
}

export default Footer