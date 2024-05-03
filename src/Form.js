import React from "react";

export default function Form({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="search" placeholder="Enter a city..." onChange={onChange} />
      <input type="submit" value="Search" />
    </form>
  );
}
