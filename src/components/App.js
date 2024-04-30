import React, { useState } from "react"; // Import useState hook
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [toLight, setToLight] = useState(false)

  const appClass = toLight ? "App dark" : "App light";

  const toggleLightMode = () => {
    setToLight(prevMode => !prevMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleLightMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

