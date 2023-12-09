import React, { useState } from "react";
import Styles from "@/styles/Search.module.css";
export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    console.log(searchValue);
    // Open the search results in a new tab
    window.open(`/search?q=${searchValue}`);
  }

  return (
    // try to make multiple <input> for multiple text input
    <div>
      <form className={Styles.form}>
        <input
          className={Styles.input}
          type="text"
          placeholder="Comment Puis-Je Vous Aider ?"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={Styles.button} type="submit" onClick={handleSearch}>
          Help !
        </button>
      </form>
    </div>
  );
}
