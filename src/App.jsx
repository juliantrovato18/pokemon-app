import { React ,useState, useEffect } from 'react'
import './App.css'
import { Card } from './Card'
import {PokeInfo} from "./Poke-info";
import axios from 'axios';


function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokedex, setPokedex] = useState();

  

  const pokeFun = async()=>{
    setLoading(true)
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  }


    const getPokemon = async(res)=>{
      res.map(async(item)=>{
        const busqueda = await axios.get(item.url);
        console.log(busqueda.data, "cuantas");
         setPokeData(state=>{
          state = [...state, busqueda.data]
          state.sort((a,b)=>a.id >b.id?1:-1)
          return state
         })

      })
    }

    useEffect(()=>{
      pokeFun()
        },[url])

    
  return (
    <>
      <div className="container">
        <div className="left-content">
            <Card pokemon={pokeData} loading={loading} infoPoke={poke=>setPokedex(poke)} />
            <div className="botones">
              <button onClick={()=>{
                setPokeData([])
                setUrl
              (prevUrl)}}>Previous</button>
              <button onClick={()=>{
                setPokeData([])
                setUrl(nextUrl)}}>Next</button>
            </div>
        </div>
        <div className="right-content">
          <PokeInfo data={pokedex}/>
        </div>
      </div>
    </>
  )
}

export default App
