import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NotesContext } from "./context";
import { CreateNoteScreen } from "./CreateNoteScreen";
import { HomeScreen } from "./HomeScreen";
import { EditNoteScreen } from "./EditNoteScreen";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, tile: "Note 1", content: "Note 1 content" },
    { id: 2, tile: "Note 2", content: "Note 2 content" },
  ]);

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <NotesContext.Provider value={{ notes, setNotes, deleteNote }}>
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
            <Route path="/edit/:noteid" element={<EditNoteScreen />} />
          </Routes>
        </main>
        <footer>footer</footer>
      </div>
    </NotesContext.Provider>
  );
}

export default App;
