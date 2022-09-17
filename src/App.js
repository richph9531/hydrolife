import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img
        src={`${process.env.PUBLIC_URL}/media/logo.png`}
        alt='Hydrolife Logo'/>
        <p>Coming soon...</p>
        <a href="tel:0217050306">021-705-0306</a>
      </header>
    </div>
  );
}

export default App;
