import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "./context";

export function CreateNoteScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { notes, setNotes } = useContext(NotesContext);

  const navigate = useNavigate();
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
      <button className="uk-button uk-button-default"
        onClick={(e) => {
          setNotes([...notes, { title, content, id: notes.length + 1 }]);
          setTitle("");
          setContent("");
          navigate("/");
        }}
      >
        Create Note
      </button>
    </>
  );
}
