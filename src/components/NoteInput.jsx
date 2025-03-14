import React, { useState } from "react";

export default function NoteInput({ addNote }) {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [titleCharCount, setTitleCharCount] = useState(50);

   const handleTitleChange = (e) => {
      const value = e.target.value;
      if (value.length <= 50) {
         setTitle(value);
         setTitleCharCount(50 - value.length);
      }
   };

   const handleBodyChange = (e) => {
      setBody(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (title.trim() && body.trim()) {
         addNote({
            title,
            body,
         });
         setTitle("");
         setBody("");
         setTitleCharCount(50);
      }
   };

   return (
      <section className="note-input">
         <h2>Buat Catatan</h2>
         <form className="input-group" onSubmit={handleSubmit}>
            <div className="title-input">
               <p className="char-count">Sisa Karakter: {titleCharCount}</p>
               <input
                  type="text"
                  placeholder="judul.."
                  value={title}
                  onChange={handleTitleChange}
               />
            </div>
            <textarea
               placeholder="catatan..."
               value={body}
               onChange={handleBodyChange}
            ></textarea>
            <button type="submit">Tambah</button>
         </form>
      </section>
   );
}
