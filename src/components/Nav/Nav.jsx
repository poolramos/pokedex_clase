import "./Nav.css";

function Nav({ fnSubmit, fnClick, fnOnChange, dataOptions }) {
  return (
    <nav>
      <form onSubmit={fnSubmit}>
        <label htmlFor="name">
          Escribe el nombre específico de un pokemon:
        </label>
        <input className="inputname" type="text" />
        <button className="search" type="submit">Buscar</button>
      </form>
      <div>
        <label>Filtra según escribes:</label>
        <div id="options">
          <input className="inputfilter" type="text" onChange={fnOnChange} />
          <ul>
            {dataOptions?.map((pokemon, i) => (
              <li key={i}>
                <button value={pokemon.name} onClick={fnClick}>{pokemon.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <button onClick={fnClick} value="pikachu">
            Pikachu
          </button>
        </div>
        <div>
          <button onClick={fnClick} value="charizard">
            Charizard
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
