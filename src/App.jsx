import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NotesContext } from "./contex";
import { CreateNoteScreen } from "./CreateNoteScreen";
import { HomeScreen } from "./HomeScreen";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <NotesContext.Provider value={useState({ notes, setNotes })}>
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
    </NotesContext.Provider>
  );
}

export default App;
