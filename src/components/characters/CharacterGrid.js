import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid =({Itens, Isloading})=>{
   return Isloading ? ( <Spinner/> ):(
       <section className="cards">
           {Itens.map((item)=>(
               <CharacterItem key={item.char_id} item={item}></CharacterItem>
           ))}
       </section>
   )
}
export default CharacterGrid;
