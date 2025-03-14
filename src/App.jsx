import React, { useState } from "react";
import "./styles/App.css";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import { getInitialData } from "./utils";

function App() {
   const [notes, setNotes] = useState(getInitialData());
   const [searchTerm, setSearchTerm] = useState("");

   // Function to add a new note
   const addNote = ({ title, body }) => {
      const newNote = {
         id: +new Date(),
         title,
         body,
         archived: false,
         createdAt: new Date().toISOString(),
      };
      setNotes([...notes, newNote]);
   };

   // Function to delete a note
   const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
   };

   // Function to toggle archive status
   const toggleArchive = (id) => {
      setNotes(
         notes.map((note) => {
            if (note.id === id) {
               return { ...note, archived: !note.archived };
            }
            return note;
         })
      );
   };

   // Filter notes based on search term
   const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
   );

   // Separate active and archived notes
   const activeNotes = filteredNotes.filter((note) => !note.archived);
   const archivedNotes = filteredNotes.filter((note) => note.archived);

   return (
      <div className="app">
         <header>
            <h1>Personal Notes App</h1>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
         </header>

         <main>
            <NoteInput addNote={addNote} />

            <div className="note-list-container">
               <NoteList
                  title="Catatan Aktif"
                  notes={activeNotes}
                  onDelete={deleteNote}
                  onArchive={toggleArchive}
               />

               <NoteList
                  title="Catatan yang di Arsipkan"
                  notes={archivedNotes}
                  onDelete={deleteNote}
                  onArchive={toggleArchive}
               />
            </div>
         </main>
      </div>
   );
}

export default App;
