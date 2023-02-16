import React from "react"
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="col-md-4">
      <input
        type="search"
        value={value}
        className="form-control form-control-lg"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
export default SearchBar