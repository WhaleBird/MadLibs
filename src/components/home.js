
import React, { Component } from 'react';

import Header from './header';
import Card from './card';

 class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card/>
        
        
      </div>
    );
  }
}

// TODO

//fix /positioning on button 
/////labels for content
////// clear generate btn space/card-height
////
////
///
export default Home;