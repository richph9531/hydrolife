
import PageHeader from './components/PageHeader';

import classes from './styles/App.module.css';

function App() {
  return (
    <div className='App'>
      <PageHeader/>
      <div className={classes.MainContainer}>
        <img 
          src={`${process.env.PUBLIC_URL}/media/logo.png`}
          alt='Hydrolife Logo'/>
        <p>Coming soon...</p>
        <a href="tel:0878203953" style={{ color: '#FFF' }}>087 820 3953</a>
      </div>
    </div>
  );
}

export default App;
