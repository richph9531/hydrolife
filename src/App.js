import React from 'react';

import PageHeader from './components/PageHeader';
import Home from './components/Home';
import ContactUs from './components/ContactUs';

import contactUsData from './data/contactUs.json'

function App() {
  return (
    <div className='App'>
        <PageHeader data={contactUsData}/>
        <Home/>
        <ContactUs data={contactUsData}/>
    </div>
  );
}
export default App;
