import React,{useState, useEffect} from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios'

import './App.css';


const App =()=> {

  const [Itens,setItens] = useState([]);
  const [Isloading, setIsloading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(()=>{
    const fetchItems = async () =>{
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      )
      console.log(result.data)
      setItens(result.data)
      setIsloading(false)
    }
    fetchItems()
  },[query])
  return (
    <div className="container">
     <Header/>
     <Search getQuery={(q) =>setQuery(q)}/>
     <CharacterGrid Isloading={Isloading} Itens={Itens}/>
     <p>João Paulo Duarte Desenvolvedor Web Front End</p>
    </div>
  );
}

export default App;
