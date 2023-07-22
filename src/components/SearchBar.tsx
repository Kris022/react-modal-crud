import { useDebugValue, useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  // const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: any) => {
    // setSearchTerm(e.target.value);
    const searchTerm = e.target.value.trim();
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
      className=""
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
};

export default SearchBar;
