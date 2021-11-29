import React, { useContext } from "react";
import { NotesContext } from "./context";
import { Link } from "react-router-dom";

function Note({ note, onDelete }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={onDelete}> delete</button>
      <Link to={`/edit/${note.id}`}>edit</Link>
    </div>
  );
}

export function HomeScreen() {
  const { notes, deleteNote } = useContext(NotesContext);
  return (
    <>
      <h3>Notes</h3>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={() => deleteNote(note.id)}
          />
        ))}
      </ul>
      <pre>{JSON.stringify(notes)}</pre>
    </>
  );
}
