import React from "react";

export default function SearchBar({ searchTerm, onSearchChange }) {
   return (
      <div className="search-container">
         <input
            type="text"
            placeholder="Cari catatan..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
         />
      </div>
   );
}


