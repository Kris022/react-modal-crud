import { useDebugValue, useState } from "react";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({onSearch}: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = () => {
        onSearch(searchTerm.trim());
    }
    
    const handleChange = (e: any) => {
        setSearchTerm(e.target.value);
    }
    
    return ( 
        <div>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
     );
}
 
export default SearchBar;