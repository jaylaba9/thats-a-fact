import './style.css';

function App() {
  return (
    <header class="header flex">
      <div class="logo flex">
        <img src="/logo.png" alt="Logo" />
        <h1>That's a fact</h1>
      </div>
      <button class="btn btn-large btn-share">Share a fact</button>
    </header>
  );
}

export default App;
