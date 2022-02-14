import React from "react";
import "./Recipe.css";
import { v4 as uuidv4 } from "uuid";

const Recipe =({ recipe }) => {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="recipe"
        onClick={() => window.open(recipe["recipe"]["url"])}
      >
        <img className="recipe__img" src={recipe["recipe"]["image"]} />
        <p className="recipe__name" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}

export default Recipe;