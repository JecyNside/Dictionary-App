import { useState } from 'react'
import search from '../assets/images/icon-search.svg'

function SearchBar({onSearch}) {

  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e)=>{
    onSearch(searchValue)
    e.preventDefault();
    setSearchValue("");
  }

  const handleSearch = ()=>{
    if (searchValue == "") return null;
    onSearch(searchValue);
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
            <input type="text"
            required
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            />
            <img src={search} alt="search" onClick={()=> handleSearch()}/>
        </label>
    </form>
  )
}

export default SearchBar