import { React, useState } from "react";
import Item from "./Item";

//if option value = dairy, return items.filter item.category === "dairy"

function ShoppingList({ items }) {
  //console.log(items)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  } 

  const itemFilter = items.filter(item => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });

    //   console.log(item.category)
    //   return (item.category === e.target.value)
    // })
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
