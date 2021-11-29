import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NotesContext } from "./context";
import { CreateNoteScreen } from "./CreateNoteScreen";
import { HomeScreen } from "./HomeScreen";
import { EditNoteScreen } from "./EditNoteScreen";

import "../node_modules/uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

//loads the icon plugin
UIkit.use(Icons);

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
      <div className="uk.container">
        <header className="App-header">
          <h1 className=".uk-text-lead">
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
