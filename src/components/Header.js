// Header.js
import React from "react";

function Header({ onToggleDarkMode }) {
  return (
    <header>
      <button className="btn btn-primary" onClick={onToggleDarkMode}>
        Togg
      </button>
    </header>
  );
}

export default Header;
