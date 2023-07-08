import '../styles/About.css';
import { Link } from "react-router-dom";
export default function About(){
    return(
    <body className='About'>
    <header>
    <nav>
        <div className="logo">
            </div>
            <ul>
                <li><Link className="Home" to="/Alumni/">Home</Link></li>
                <li><Link className="About_Nav" to="/Alumni/About">About</Link></li>
                <li><Link className="Alumni" to="/Alumni/">Alumni Events</Link></li>
            </ul>
        </nav>
</header>
   <div className="img-size">
       <img  src='https://www.campusvarta.com/uploads/2022/12/19/all-alumni-during-alumni-day1671433980.jpg' alt="IITH" width="75%" height="135%"  />
    </div>
    <div className="container">
    <div>
        <h2>ABOUT US</h2>
        <p> We all know that Alumni have always played a big role in building the institutes and its reputation.
            The  Alumni Relations office is a key pillar of our institute for our growth. 
            We would be grateful that you come back to our alma mater and give your advise and also if possible donate.
            Always remember you were, are and will be the part of IIT Hyderabad.         
        </p>
    </div>
    <div>
        <h2>Our Vision</h2>
        <p>Help IIT Hyderabad rank to be among the top engineering and technology instiutes worldwide by fostering strong relationships with its alumni, corporations and help students to grow network in industries.</p>
    </div>
    <div>
        <h2>Activities</h2>
            <p>We conduct various activities for the engagement of alumni with IIT :</p>
            <ul>
                <li class="li-size">Alumni Talk:  </li><p>The main motive of this event is to guide IITH students and strenthen the bond b/w Alumni and IIT Hyderabad.</p>
                <li  class="li-size">Alumni Day: </li> 
                <p>Celebrate this event for 2 days on the weekend including formal and informal activities.</p>
                <li  class="li-size">Meet and Greet:</li>
                <p>We are keen on reaching out to our Alumni and conduct Meet and Geet events in various cities and meet the alumni living in those cities.</p>
            </ul>
    </div>
  </div>     
</body>

)
};