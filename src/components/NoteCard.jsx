import React from "react";
import { showFormattedDate } from "../utils";

export default function NoteCard({
   id,
   title,
   body,
   createdAt,
   onDelete,
   archived,
   onArchive,
}) {
   const formattedDate = showFormattedDate(createdAt);
   return (
      <div className="note-card">
         <h3>{title}</h3>
         <p className="note-date">{formattedDate}</p>
         <p className="note-body">{body}</p>
         <div className="note-actions">
            <button className="archive-btn" onClick={() => onArchive(id)}>
               {archived ? "Pindahkan" : "Arsipkan"}
            </button>
            <button className="delete-btn" onClick={() => onDelete(id)}>
               Delete
            </button>
         </div>
      </div>
   );
}
