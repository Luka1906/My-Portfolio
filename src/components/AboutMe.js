import classes from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={`global-about ${classes.about}`}>
            <h1>About Me</h1>
            <p> I am very ambitious and hard working<span className={`global-bold ${classes.bold}`}> Front-End developer </span>looking for a role in a company 
            where I can showcase but also extend all of my potentinal and get oportunity to work with the latest
            technologies on challenging projects.<br/><br/>

            The most existing thing about programming is the fact that this is a non-ending process of learning 
            which challenges you but also motivates you to be better programmer tomorrow. <br/><br/>

            If I had to describe myself I would say that I am huge animal and nature lover in general.
            I love spending time with friends playing board games, and when it comes to my professional quality
            I am detail-oriented, goal driven and just love spending time with my coworkers</p>

        </div>
    )
}

export default AboutMe