import React, { useContext } from "react";
import { NotesContext } from "./context";
import { Link } from "react-router-dom";

function Note({ note, onDelete }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button className="uk-button uk-button-default" onClick={onDelete}>
        {" "}
        delete
      </button>
      <Link to={`/edit/${note.id}`}>
        <button className="uk-button uk-button-default"> edit</button>
      </Link>
    </div>
  );
}

export function HomeScreen() {
  const { notes, deleteNote } = useContext(NotesContext);
  return (
    <>
      <h3 className=".uk-text-lead">Notes</h3>
      <ul className="uk-list uk-list-striped">
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
