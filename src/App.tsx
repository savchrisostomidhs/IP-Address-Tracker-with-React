import { useEffect, useState } from "react"
import Context from "./Components/Context";
import Search from "./Components/Search"
import useFetch from "./Hooks/useFetch";
import Map from "./Components/Map"
import './App.css'

function App() {
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const data = useFetch(`${import.meta.env.VITE_API + query}&domain=${query}`);

  const [latitude, setLatitude] = useState<number | undefined>(data?.location && data?.location.lat);
  const [longitude, setLongitude] = useState<number | undefined>(data?.location && data?.location.lng);

  useEffect(() => {
    if (data?.location) {
      setLatitude(data?.location.lat);
      setLongitude(data?.location.lng);
    }
  }, [data]);


  return (
    <Context.Provider value={data}>
      <div className="app">
        <Search search={search}
          setSearch={setSearch}
          onSubmit={() => setQuery(search)}
        />
        <Map
          lat={latitude}
          lng={longitude}
        />
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/savchrisostomidhs">savchrisostomidhs</a>.
      </div>
    </Context.Provider>
  )
}

export default App
