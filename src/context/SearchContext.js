import { createContext } from 'react'
//creates an empty array to hold all the context we need
export const SearchContext = createContext({
    term: '',
    handleSearch: () => { }
})
