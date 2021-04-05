import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drink from "./Drink-details";

function Shop({ setDrink }) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const items = await data.json();
    console.log(items);
    setDrinks(items.drinks);
    console.log(drinks);
  };

  return (
    <div>
      <h1>Drinks</h1>
      {drinks.map((drink) => {
        return (
          <div>
            <h1 key={drink.idDrink}>
              <Link to={`/shop/${drink.strDrink}`}> {drink.strDrink} </Link>
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
