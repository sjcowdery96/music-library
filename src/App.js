import { useEffect, useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App() {

  //let [search, setSearch] = useState('') //made redundant by useContext
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')//empty string to start

  const API_URL = 'https://itunes.apple.com/search?term='

  //by using CONTEXT, our useEffect loop is irrelevant 
  /*
  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} music`
        //builds our custom request
        const response = await fetch(API_URL + search)
        //saves the request data as JSON
        const resData = await response.json()
        if (resData.results.length > 0) {
          return setData(resData.results)
        } else {
          return setMessage('Not Found.')
        }
      }
      fetchData()
    }
  }, [search])
  */

  //new and improved handleSearch references CONTEXT
  //so useEffect is not needed
  const handleSearch = (e, term) => {
    //prevents default GET request
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} music`
      //builds our custom request
      const response = await fetch(API_URL + term)
      //saves the request data as JSON
      const resData = await response.json()
      if (resData.results.length > 0) {
        return setData(resData.results)
      } else {
        return setMessage('Not Found.')
      }
    }
    fetchData()
    //setSearch(term)
  }

  return (
    <div>
      <SearchContext.Provider value={{ term: searchInput, handleSearch: handleSearch }}>
        <SearchBar />
        {message}
      </SearchContext.Provider>
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  )

}

export default App


/*


const App = () => {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if(search) {
            const fetchData = async () => {
                document.title = `${search} music`
                const response = await fetch(API_URL + search)
                const resData = await response.json()
                if (resData.results.length > 0) {
                    return setData(resData.results)
                } else {
                    return setMessage('Not Found.')
                }
            }
            fetchData()
        }
    }, [search])

    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            {message}
            <Gallery data={data} />
        </div>
    )
}

export default App

*/