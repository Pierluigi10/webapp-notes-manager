import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NotesContext } from "./context";

export function EditNoteScreen() {
  const { noteid } = useParams(); // return always a string
  //   console.log("noteid", noteid);
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(NotesContext);

  const noteToEdit = notes.find((note) => note.id === parseInt(noteid));
  //   console.log(notes);
  //   console.log("noteToEdit", noteToEdit);

  const [title, setTitle] = useState(noteToEdit.title);
  const [content, setContent] = useState(noteToEdit.content);

  return (
    <>
      Edit Note
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
          setNotes([
            ...notes.filter((n) => n.id !== noteToEdit.id),
            { title, content, id: noteToEdit.id },
          ]);
          setTitle("");
          setContent("");
          navigate("/");
        }}
      >
        Save
      </button>
    </>
  );
}
