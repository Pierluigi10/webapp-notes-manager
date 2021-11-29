import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NotesContext } from "./context";
import { CreateNoteScreen } from "./CreateNoteScreen";
import { HomeScreen } from "./HomeScreen";

function App() {
  const [notes, setNotes] = useState([
    { id:1, tile: "Note 1", content: "Note 1 content" },
    {id: 2, tile: "Note 2", content: "Note 2 content" },
  ]);
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/"> Notes App ({notes.length}) </Link>
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
