import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.ready();
  };

  return (
    <div className="App">
        <h1>robit</h1>
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
