import './Footer.css'

function Footer(){
    return(
        <div className='footer'>
        
            <p>&copy; {new Date().getFullYear()} <span>SLADZ</span>  All rights reserved.</p>
        
         <p>Privacy policy</p>
         <p>Terms of service</p>
         

        
        </div>

    );
}
export default Footer;