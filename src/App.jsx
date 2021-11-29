import { Routes, Route, Link } from "react-router-dom";
import { CreateNoteScreen } from "./CreateNoteScreen";

function HomeScreen() {
  return (
    <>
      <h3>Home</h3>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Link to="/"> Notes App </Link>
        </h1>
        <Link to="/create"> create </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create" element={<CreateNoteScreen />} />
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
