import React, { useContext, useState } from "react";
import { NotesContext } from "./context";

export function CreateNoteScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { notes, setNotes } = useContext(NotesContext);
  return (
    <>
      Create Note
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={(e) => {
          setNotes([...notes, { title, content, id: notes.length + 1 }]);
          setTitle("");
          setContent("");
        }}
      >
        Create Note
      </button>
    </>
  );
}
