import React, {useState} from 'react';
import Axios from 'axios';
import Recipe from './components/Recipe';
import './App.css'

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const YOUR_APP_ID = `c5796984`;//get your App Id on Edamam 
  const YOUR_APP_KEY = "6055b69ad84c485550d7ebe2c5a430c5"; //same as App Key


  //Mine app key will not work You Have Create on Edamam.com

  var url = `https://api.edamam.com/search?q=${query}&
  app_id=${YOUR_APP_ID}&
  app_key=${YOUR_APP_KEY}`;

  const getRecipes = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className='app'>
      <h1 onClick={getRecipes}>Food Recipe</h1>
      <form className='app__searchForm' onSubmit={onSubmit}>
        <input className="app__input"
        type='text' 
        placeholder='Enter food' 
        autoComplete="Off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}

        />
        <input className="app__submit" type='submit' value='Search'></input>
      </form>
      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <Recipe recipe={recipe} />;
          })}
      </div>
    </div>
  )
     
}

export default App;