import React, {Component} from 'react';
import NavBar from './components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs';
import PlanYourEvent from './components/PlanYourEvent';
import Inspirations from './components/Inspirations';
import ContactUs from './components/ContactUs';
import Logo from './components/Logo';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import French from './French'
import AboutUsFrench from './components/AboutUsFrench';

counterpart.registerTranslations('en', )

counterpart.setLocale('en');






class App extends Component {
  state={
  
    
      budget: [
        {id:1, venue: "200$", fooddrink: "300$", decorations: "100$", music : "$50"},
       
  
      ]
    
  }

  render(){
  return (
    <BrowserRouter>
    <Logo />
    <div className="todo-app container">
      
      
      
      <Route exact path='/AboutUs' component={AboutUs} />
      <Route path='/PlanYourEvent' component={PlanYourEvent}/>
      <Route path='/Inspirations' component={Inspirations} />
      <Route path='/ContactUs' component={ContactUs} />
     
      <Route path='/AboutUsFrench' component={AboutUsFrench}/>

      
    </div>
    </BrowserRouter>
  );
}
}

export default App;
