import "./RecipeCard.css";

interface Ingredient {
  item: string;
  quantity: string;
}

interface RecipeProps {
  id: number;
  name: string;
  servings: number;
  timeToMake: string;
  ingredients: Ingredient[];
  directions: string[];
}

export function RecipeCard(props: RecipeProps) {
  const { name, servings, timeToMake, ingredients, directions } = props;

  return (
    <article className="recipe-card">
      <h3>{name}</h3>
      <p>Servings: {servings}</p>
      <p>Time to make: {timeToMake}</p>

      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.quantity} of {ingredient.item}
          </li>
        ))}
      </ul>

      <h4>Directions:</h4>
      <ol>
        {directions.map((direction, index) => (
          <li key={index}>{direction}</li>
        ))}
      </ol>
    </article>
  );
}
