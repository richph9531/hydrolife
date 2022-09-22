import React, { Component } from 'react';

import PageHeader from './components/PageHeader';
import Home from './components/Home';
import ProductsAndServices from './components/ProductsAndServices';
import CoolerRentals from './components/CoolerRentals';
import MeetTheTeam from './components/MeetTheTeam';
import ContactUs from './components/ContactUs';

import teamData from './data/meetTheTeam.json';

class App extends Component {
  state = {};

  render() {
    return (
       <div className='App'>
        <PageHeader/>
        <Home/>
        <CoolerRentals/>
        <ProductsAndServices/>
        <MeetTheTeam data={teamData}/>
        <ContactUs/>
      </div>
    );
  }
}

export default App;
