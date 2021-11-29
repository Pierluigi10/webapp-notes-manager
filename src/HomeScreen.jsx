import React, { useContext } from "react";
import { NotesContext } from "./context";

export function HomeScreen() {
  const { notes, setNotes } = useContext(NotesContext);
  return (
    <>
      <h3>Home</h3>
      <pre>{JSON.stringify(notes)}</pre>
    </>
  );
}
