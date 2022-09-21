
import PageHeader from './components/PageHeader';
import Home from './components/Home';
import ProductsAndServices from './components/ProductsAndServices';
import CoolerRentals from './components/CoolerRentals';
import MeetTheTeam from './components/MeetTheTeam';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className='App'>
      <PageHeader/>
      <Home/>
      <ProductsAndServices/>
      <CoolerRentals/>
      <MeetTheTeam/>
      <ContactUs/>
    </div>
  );
}

export default App;
