import { useState, useEffect } from "react";

import { Pokecard } from "..";

import presetData from "../../data/pokedata.json";

function Pokedex() {
  const [pokeData, setPokeData] = useState(presetData);
  const [pokemonName, setPokemonName] = useState("");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.sprites["front_default"])
        console.log(data);
      });
  }, [pokemonName]);

  return (
    <>
      <div className="pokedex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPokemonName(inputText);
            setInputText("")
          }}
        >
          <input
            type="text"
            name="pokemonName"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Add To Pokedex</button>
        </form>
        {pokeData.map((pokeObj) => (
          <Pokecard
            name={pokeObj.name}
            type={pokeObj.type}
            imageURL={pokeObj.image}
          />
        ))}
      </div>
    </>
  );
}

export default Pokedex;
