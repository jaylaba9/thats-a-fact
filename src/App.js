import './style.css';

function App() {
  const appTitle = "That's a fact";

  return (
    <>
      {/* HEADER will get its own component */}
      <header className="header flex">
        <div className="logo flex">
          <img src="/logo.png" alt="Logo" />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-share">Share a fact</button>
      </header>

      <NewFactForm />

      <main className="main-content grid">
        <CategoryFilter />
        <FactsList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form flex">Fact form</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactsList() {
  return <section class="section__facts">Facts list</section>;
}

export default App;
