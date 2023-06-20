import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Wednesday Adams"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div className="main">
        <h1 className="heading">REACT APP FOR GIFS</h1>
        <p className="subHeading">
          This is a React App consuming an API from GYPHY
        </p>

        <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
