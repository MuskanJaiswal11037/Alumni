import '../styles/home.css'
import { Link } from "react-router-dom";
export default function homepage()
{

return(
<>
<body className='Home-page'>
    <header>
        <nav>
            <div className="logo">
            </div>
            <ul>
                <li><Link className="Home" to="/Alumni/">Home</Link></li>
                <li><Link className="About-Nav" to="/Alumni/About">About</Link></li>
                <li><Link className="Alumni" to="/Alumni/">Alumni Events</Link></li>
            </ul>
        </nav>
</header>
<div className="container">
    <div className="Alumni-Main1">

    </div>
    <div className="Alumni-Main2">
        <h3>WELCOME BACK!</h3>
        <br/>
        <p>YOU CAN LEAVE IIT HYDERABAD BUT IIT HYDERABAD CAN NEVER LEAVE YOU. 
          NO MATTER HOW OLD YOU ARE OR HOW FAR YOU GO BUT YOU WILL NEVER FORGET THE PRECIOUS TIME THAT YOU SPEND IN IIT HYDERABAD.
          SO, COME BACK TO ALMA MATER OF OUR INSTITUTE. WHAT ARE YOU WAITING FOR?  
        </p>      
    </div> 
    <div className="Alumni-Main3">
        <img className="img2" src="https://assets.telegraphindia.com/telegraph/2021/Nov/1638179683_iit-hyderabad-7.jpg" alt="img"/>
        <img className="img3" src="https://static.toiimg.com/thumb/msid-97364249,imgsize-875187,width-400,resizemode-4/97364249.jpg" alt="img"/>    
    </div>
</div>


</body>
</>
)
}