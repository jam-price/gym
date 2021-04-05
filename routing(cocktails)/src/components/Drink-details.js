import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Drink({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [drinkDetails, setDrinkDetails] = useState([]);
  const drink = match.params.drink;

  const fetchItem = async () => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    );
    const jsonData = await data.json();
    console.log(jsonData.drinks[0]);
    // set state to first drink fetched by name
    setDrinkDetails(jsonData.drinks[0]);
  };

  return (
    <div>
      <h1>{drinkDetails.strDrink}</h1>
      <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink}></img>
      <h2>Method</h2>
      <p>{drinkDetails.strInstructions}</p>
      <h2>Ingredients</h2>
      <p>{drinkDetails.strMeasure1 !== null ? drinkDetails.strMeasure1 : ''}</p>
        <p>{drinkDetails.strIngredient1 !== null ? drinkDetails.strIngredient1 : ''}</p>
        <p>{drinkDetails.strMeasure2 !== null ? drinkDetails.strMeasure2 : ''}</p>
        <p>{drinkDetails.strIngredient2 !== null ? drinkDetails.strIngredient2 : ''}</p>
        <p>{drinkDetails.strMeasure3 !== null ? drinkDetails.strMeasure3 : ''}</p>
        <p>{drinkDetails.strIngredient3 !== null ? drinkDetails.strIngredient3 : ''}</p>
        <p>{drinkDetails.strMeasure4 !== null ? drinkDetails.strMeasure4 : ''}</p>
        <p>{drinkDetails.strIngredient4 !== null ? drinkDetails.strIngredient4 : ''}</p>
        <p>{drinkDetails.strMeasure5 !== null ? drinkDetails.strMeasure5 : ''}</p>
        <p>{drinkDetails.strIngredient5 !== null ? drinkDetails.strIngredient5 : ''}</p>
        <p>{drinkDetails.strMeasure6 !== null ? drinkDetails.strMeasure6 : ''}</p>
        <p>{drinkDetails.strIngredient6 !== null ? drinkDetails.strIngredient6 : ''}</p>
        <p>{drinkDetails.strMeasure7 !== null ? drinkDetails.strMeasure7 : ''}</p>
        <p>{drinkDetails.strIngredient7 !== null ? drinkDetails.strIngredient7 : ''}</p>
        <p>{drinkDetails.strMeasure8 !== null ? drinkDetails.strMeasure8 : ''}</p>
        <p>{drinkDetails.strIngredient8 !== null ? drinkDetails.strIngredient8 : ''}</p>
        <p>{drinkDetails.strMeasure9 !== null ? drinkDetails.strMeasure9 : ''}</p>
        <p>{drinkDetails.strIngredient9 !== null ? drinkDetails.strIngredient9 : ''}</p>
    </div>
  );
}

export default Drink;
