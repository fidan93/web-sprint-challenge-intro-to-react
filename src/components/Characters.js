// Write your Character component here
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';

export default function Characters(){
const [character, setCharacter] = useState([]);

useEffect(()=>{
    axios
    .get(`https://swapi.dev/api/people/`)
    .then((res)=>{
      setCharacter(res.data.results)
    })
    .catch((err)=>{
    console.log(err)
    })
},[])

return (
    <div>
{character.map((hero) => {
    return <Character key ={hero.name} hero = {hero} />
})}
    </div>
)
}

// if(!character) return <h3>Loading...</h3>
