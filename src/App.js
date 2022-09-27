import React, { useState } from 'react';

import PageHeader from './components/PageHeader';
import Home from './components/Home';
import ContactUs from './components/ContactUs';

import contactUsData from './data/contactUs.json'

function App() {
  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    message: '',
    reply_to: '',
  });

  return (
    <div className='App'>
        <PageHeader data={contactUsData}/>
        <Home/>
        <ContactUs data={[toSend, setToSend, contactUsData]}/>
    </div>
  );
}
export default App;
