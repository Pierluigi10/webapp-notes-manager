import React, { useContext } from "react";
import { NotesContext } from "./context";

function Note({ note }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}

export function HomeScreen() {
  const { notes, setNotes } = useContext(NotesContext);
  return (
    <>
      <h3>Notes</h3>
      <ul>
        {notes.map((note, position) => (
          <Note key={position} note={note} />
        ))}
      </ul>
      <pre>{JSON.stringify(notes)}</pre>
    </>
  );
}
