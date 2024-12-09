import './About.css'
import about_pic from './/about-pic.jpg';
function About (){
    
        return (
            <div id="about"className="about">
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        Hello! I’m Angel Song, a passionate coder and software developer based in beautiful Ghana. Every day is an opportunity for me to learn something new, whether it's a programming language, a business strategy, or a skill that helps me grow both personally and professionally.
                    </p>
                    <p>
                        I have a deep love for coding. There's something incredibly fulfilling about bringing ideas to life through technology. Beyond the screen, I’m also an avid sports enthusiast. Whether it’s playing on the field or cheering for my favorite teams, sports teach me teamwork and perseverance—values that I carry into my work.
                    </p>
                    <p>
                        At the core of who I am is my faith in God. My beliefs guide my actions and inspire me to help others whenever I can. I find joy in giving back and supporting those around me, whether it’s through mentorship, volunteering, or simply lending a listening ear.
                    </p>
                    <p>
                        The most important people in my life are my family and those who believe in me. They are my greatest supporters, and I consider them my extended family. Their encouragement fuels my passion and drives me to strive for excellence in everything I do.
                    </p>
                </div>
                <div className="about-image">
                    <img src={about_pic} alt="Angel Song" />
                </div>
            </div>
        );
    }
    
    export default About;