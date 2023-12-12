import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar() {
    //gets our term and handleSearch function from the SearchContext
    const { term, handleSearch } = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search for music Here" />
            {/* term.current.value prevents us from grabbing the entire input element */}
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}



export default SearchBar