import { Routes, Route } from "react-router-dom";

function HomeScreen(){
  return(
    <>
    <h3>Home</h3>
    </>
  )
}


function App() {
  return (
    <div className="App">
        <header className="App-header">
          <p>Notes App</p>
        </header>
        <main>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
      </Routes>
        </main>
        <footer>footer</footer>
    </div>
  );
}

export default App;
