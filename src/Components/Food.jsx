import gobe from './/gobe.jpg';
import waakye from './/waakye.jpg';
import gyorgyor from './/gyorgyor.jpeg';
import './Food.css';

function Food(){
    return(
    <div id="food">
        <h1 className='name'>Fooooooooddddddd!</h1>
    
        <div className='food'>
          

<div className='food-card'>             
            <img src={gobe} alt='Gobe'></img>
            <h3>Gobe</h3>
            <p>The best gobe is sold buy a Daavi no doubt. If you don't agree go burn the sea.</p> </div>


            <div className='food-card'>
            <img src={waakye} alt="Waakye"></img>
            <h3>Waakye</h3>
            <p>
               Once, I nearly fought someone for pouring water into the pot after we served it! I shouted, “What are you doing? He just spoilt my crisppy Kanzo.
            What's that? 
                         </p> </div>

           
            <div className='food-card'>
            <img src={gyorgyor} alt='Gyorgyor'></img>
            <h3>GyorGyor</h3>
            <p>Chale this be the real deal. I thought only northeners in Ghana know about this golden delicacy but i just discovered some nigerians eat it too!</p> </div>

            
            
        </div>

        </div>);
}
export default Food;