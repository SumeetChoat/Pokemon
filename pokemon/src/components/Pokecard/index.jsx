function Pokecard({ name, imageURL, type }) {
    return (
      <>
        <div className="pokecard">
          <h2 className="pokemon-name">{name}</h2>
          <img src={imageURL} alt={`An image of ${name}`} />
          <div className="pokemon-type">Type: {type}</div>
        </div>
      </>
    );
  }
  
  export default Pokecard;
