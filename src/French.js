import React, {Component} from 'react';
import NavBarFrench from './components/NavBarFrench'
import {BrowserRouter, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs';
import PlanYourEvent from './components/PlanYourEvent';
import Inspirations from './components/Inspirations';
import ContactUs from './components/ContactUs';
import Logo from './components/Logo';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import App from './App'


counterpart.registerTranslations('en', )

counterpart.setLocale('en');


class FrenchSite extends Component {
 

  render(){
  return (
    <BrowserRouter>
  
    <div className="container">
      
      <NavBarFrench/><br></br>
      
      <Route exact path='/AboutUs' component={AboutUs} />
      <Route path='/PlanYourEvent' component={PlanYourEvent}/>
      <Route path='/Inspirations' component={Inspirations} />
      <Route path='/ContactUs' component={ContactUs} />
     

      
    </div>
    </BrowserRouter>
  );
}
}

export default FrenchSite;
