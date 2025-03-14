import React from "react";
import NoteCard from "./NoteCard";

export default function NoteList({ notes, onDelete, onArchive, title }) {
   return (
      <section className="note-list">
         <h2>{title}</h2>
         <div className="notes-grid">
            {notes.length > 0 ? (
               notes.map((note) => (
                  <NoteCard
                     key={note.id}
                     {...note}
                     onDelete={onDelete}
                     onArchive={onArchive}
                  />
               ))
            ) : (
               <p className="empty-message">Tidak ada catatan</p>
            )}
         </div>
      </section>
   );
}
