import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { LayoutBase } from "./Layouts/LayoutBase/LayoutBase";
import { recipes } from "./data/Recipes";

import "./index.css";

function App() {
  return (
    <LayoutBase>
      <section className="recipes-section">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
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
