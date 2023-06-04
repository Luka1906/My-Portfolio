import classes from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={`global-about ${classes.about}`}>
            <h1>About Me</h1>
            <p> I am a very ambitious and hard working<span className={`global-bold ${classes.bold}`}> Front-End developer </span>looking for a role in a company 
            where I can showcase but also extend all of my potentinal and get oportunity to work with the latest
            technologies on challenging projects.<br/><br/>

            The most exciting thing about programming is the fact that this is a non-ending process of learning 
            which challenges you but also motivates you to always strive for the best. <br/><br/>

            If I had to describe myself I would say that I am a huge animal and nature lover, who loves spending time surrounded by nature or playing board games with friends.
            When it comes to my professional and personal qualities I am detail-oriented, organized, self-motivated, conflict solver with calm and positive attitude. </p>

        </div>
    )
}

export default AboutMe