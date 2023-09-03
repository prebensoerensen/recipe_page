import "./RecipeCard.css";

interface Ingredient {
  item: string;
  quantity: string;
}

interface RecipeProps {
  id: number;
  name: string;
  imageUrl: string;
  servings: number;
  timeToMake: string;
  ingredients: Ingredient[];
  directions: string[];
}

export function RecipeCard(props: RecipeProps) {
  const { name, imageUrl, servings, timeToMake, ingredients, directions } =
    props;

  return (
    <article className="recipe-card">
      <img className="card-image" src={imageUrl} alt={name} />
      <div className="card-description">
        <h3>{name}</h3>
        <div>
          <p>Servings: {servings}</p>
          <p>Time to make: {timeToMake}</p>
        </div>
        <div className="card-ingredients">
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.item}: {ingredient.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-directions">
        <h4>Directions:</h4>
        <ol>
          {directions.map((direction, index) => (
            <li key={index}>{direction}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}
