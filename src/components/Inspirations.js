//https://youtu.be/zTitoHKsyJg
//images and descriptions from https://www.mgnevents.co.uk/32-party-theme-ideas-perfect-next-celebration/
//images et descriptions de https://www.eventective.com/ottawa-on/canadian-museum-of-history-604120.html 
import React from 'react'
import ReactPlayer from 'react-player'
import theme1 from '../theme1.png'
import theme2 from '../theme2.png'
import theme3 from '../theme3.png'
import theme4 from '../theme4.jpg'
import venue1 from '../venue1.png'
import venue2 from '../venue2.png'
import venue3 from '../venue3.png'
import venue4 from '../venue4.png'
import NavBar from './NavBar'


const Inspirations = () =>{
    return (
        <div className="container">
        <NavBar /><br></br>
        <div>
            <h4 className="left">Inspirations</h4><br></br><br></br>
            <h4 style={{color: "palevioletred"}}>Video</h4>
            <p>This video provides a short tutoriel on how to plan an event and what options have been used the most in the past. To learn more, please click on Video. </p>
            <ReactPlayer  className="center"  url = "https://www.youtube.com/watch?v=IBpzMByqOx4" controls={true}/> 
</div><br></br>
<div>
    <h4 style={{color:"palevioletred"}}>Themes and Venues</h4>   
    <p>To get inspired for future events, please look at the following list of the themes and venues.</p>    
    <div className="container">
    
   <h5>Theme 1: Alice in Wonderland</h5>
     
    
    <img className="picture" src={theme1} alt="An Event"></img>
    <p>A classic story theme wrapped in a bow of red, blue and white drapes, large rose trees, mad hatters glittery sign, jam tarts, playing cards, giant mushrooms, large clock and chain, sweets and cakes, Alice silhouette, giant red shoe seat.</p><br></br><br></br>
    
    

    <h5>Theme 2: Great Gatsby/1920's</h5>
     
    
    <img className="picture" src={theme2} alt="An Event"></img>
    <p>The roaring twenties was an era of glitz and glamour with stunning evening wear, sexy flapper dresses, cloche hats, feather fans and glittering headbands. Let us transform your event space, into a perfect scene from the 1920′s era.</p><br></br><br></br>
    
      <h5>Theme 3: Black and White Ball</h5>
     
    
    <img className="picture" src={theme3} alt="An Event"></img>
    <p>Black and white satin and voile cloth drapes with black and white feather masks, white Roman pillars, black and white glitter stars, white trees, black chandeliers, black and white feather hoops.</p><br></br><br></br>
    

    <h5>Theme 4: Enchanted Forest Theme</h5>
     
    
     <img className="picture" src={theme4} alt="An Event"></img>
     <p>Shades of green and gold cloth drapes:
Large shimmer flowers, flower garlands, trees, glittery large leaves, toadstools, hanging branches, twinkle lights and sparkle stars, fresh ivy trails and garlands.</p><br></br><br></br>
     
</div>
   <div className="container">
    
    <h5>Venue 1: Canadian Museum of History</h5>
      
     
     <img className="picture" src={venue1} alt="An Event"></img>
     <p>The Canadian Museum of History offers an exceptional experience in surroundings that are world class and uniquely Canadian. Located in the heart of our beautiful National Capital Area, directly across from Parliament Hill, the museum offers the most spectacular view of the city. As we have several different venues to choose from, we can accommodate everything from a cocktail reception for a small intimate wedding, to a multi-course, customized wedding reception for 500 guests. We offer hassle-free wedding packages, a commitment to client service from start to finish as well as offering top-quality catering and technical services. After all, your wedding is ‘History in the making’.</p><br></br><br></br><br></br>
     
     
 
     <h5>Venue 2: Sala San Marco</h5>
      
     
     <img className="picture" src={venue2} alt="An Event"></img>
     <p>The Perfect Setting - Sala San Marco Banquet Hall's warm welcome starts the moment you enter our beautiful lobby. Our services include fully licensed catering on the premises featuring a delicious array of outstanding cocktail, dinner and buffet menus. If you prefer, our gourmet chefs would be most pleased to create an exclusive menu for your special occasion. Sala San Marco is truly the perfect setting for business meetings and seminars, personal or corporate cocktail parties, luncheons, banquets, conventions, weddings and celebrations of all kinds. Sala San Marco Banquet Conference Centre in the heart of Ottawa's "Little Italy", is easily accessible because of its proximity to the Queensway, Carling Avenue, Bronson Avenue, Somerset Street and Gladstone Avenue. Free on-site parking is provided. We welcome your inquiries and look forward to serving you.</p><br></br><br></br>
     
       <h5>Venue 3: The Guild Estate</h5>
      
     
     <img className="picture" src={venue3} alt="An Event"></img>
     <p>The Guild Estate Inn is a luxurious waterfront property located on the Bluffs in Toronto, Ontario. The event space is proclaimed a National Historic Site backed by 30+ years of experience in weddings and special events under the management of Dynamic Hospitality and Entertainment Group.</p><br></br><br></br>
     
 
     <h5>Venue 4: Deer Creek Golf & Banquet Facility</h5>
      
     
      <img className="picture" src={venue4} alt="An Event"></img>
      <p>Deer Creek Golf & Banquet Facility has always been a hidden gem in the Durham Region, providing picturesque views and fresh delicious food. With a total renovation of the entire building scheduled for completion on August 1st, 2020; guests can experience the scenic countryside while enjoying the comfort and luxury of the newly redesigned event spaces.</p><br></br><br></br>
      
 </div>
 

</div>

        </div>
    )
} 
export default Inspirations
