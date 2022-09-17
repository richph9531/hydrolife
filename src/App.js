import './App.css';

function App() {
  return (
    <div className="App">
      <img
        src={`${process.env.PUBLIC_URL}/media/logo.png`}
        alt='Hydrolife Logo'/>
        <p>Coming soon...</p>
        <a href="tel:0217050306">021-705-0306</a>
    </div>
  );
}

export default App;
