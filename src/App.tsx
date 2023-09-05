import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { LayoutBase } from "./Layouts/LayoutBase/LayoutBase";
import { recipes } from "./data/Recipes";

import "./App.css";

function App() {
  return (
    <LayoutBase>
      <section className="recipes-section">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            imageUrl={recipe.imageUrl}
            servings={recipe.servings}
            timeToMake={recipe.timeToMake}
            ingredients={recipe.ingredients}
            directions={recipe.directions}
          />
        ))}
      </section>
    </LayoutBase>
  );
}

export default App;
