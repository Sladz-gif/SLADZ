
import './Hero.css'
import profile_pic from '../Hero/pic.jpg';
function Hero (){
    return(
        <div id="home" className="hero">
            <img src={profile_pic} alt="" className='hero-image' ></img>



            <h1><span>I'm Angel Song,</span> the Greatest video editor and software developer based in Ghana</h1>
            <p>This is my first project with no years of experience.</p>
            <div className='hero-action'>
                <button className='hero-connect'>Connect with me</button>
                <button className= 'hero-services'>Services</button>
            </div>

        </div>
    );
}
export default Hero;