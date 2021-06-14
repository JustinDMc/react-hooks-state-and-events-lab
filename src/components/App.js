import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [changeModeBtn, setChangeModeBtn] = useState(true)

  // this ^^^ data will be passed down to the ShoppingList as a prop
  //console.log(items);

  const changeMode = () => setChangeModeBtn(!changeModeBtn);

  return (
    <div className={"App " + (changeModeBtn ? "light" : "dark")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => changeMode()}>{changeModeBtn ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;