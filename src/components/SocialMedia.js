import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import classes from './SocialMedia.module.css'

const SocialMedia = () => {
    return (
        <div className={classes['social-media']}>
            <a href='https://www.instagram.com/lu.matovic/' target="_blank" rel='noreferrer'> <LinkedInIcon/></a>
            <a href='https://www.linkedin.com/in/michael-m-5940b8235/'target="_blank"rel='noreferrer' >  <GitHubIcon/> </a>
            <a href='https://github.com/Luka1906' target="_blank"rel='noreferrer'> <InstagramIcon/></a>
          
     
       
       </div>
    )
}

export default SocialMedia