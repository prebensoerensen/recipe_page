import image1 from "../assets/RecipeImages/image1.webp";
import image2 from "../assets/RecipeImages/image2.webp";
import image3 from "../assets/RecipeImages/image3.webp";
import image4 from "../assets/RecipeImages/image4.webp";
import image5 from "../assets/RecipeImages/image5.webp";
import image6 from "../assets/RecipeImages/image6.webp";
import image7 from "../assets/RecipeImages/image7.webp";
import image8 from "../assets/RecipeImages/image8.webp";
import image9 from "../assets/RecipeImages/image9.webp";
import image10 from "../assets/RecipeImages/image10.webp";
import image11 from "../assets/RecipeImages/image11.webp";
import image12 from "../assets/RecipeImages/image12.webp";
import image13 from "../assets/RecipeImages/image13.webp";
import image14 from "../assets/RecipeImages/image14.webp";
import image15 from "../assets/RecipeImages/image15.webp";
import image16 from "../assets/RecipeImages/image16.webp";
import image17 from "../assets/RecipeImages/image17.webp";
import image18 from "../assets/RecipeImages/image18.webp"; //er det en bedre måte å gjøre dette på enn individuelle imports?

type Recipe = {
  id: number;
  imageUrl: string;
  name: string;
  servings: number;
  timeToMake: string;
  ingredients: Array<{ item: string; quantity: string }>;
  directions: string[];
};

export const recipes: Recipe[] = [
  {
    id: 100,
    name: "Spaghetti Aglio e Olio",
    imageUrl: image1,
    servings: 2,
    timeToMake: "20 mins",
    ingredients: [
      { item: "Spaghetti", quantity: "200g" },
      { item: "Garlic", quantity: "4 cloves" },
      { item: "Red pepper flakes", quantity: "1 tsp" },
      { item: "Olive oil", quantity: "50ml" },
      { item: "Parsley", quantity: "A handful" },
    ],
    directions: [
      "Boil spaghetti until al dente.",
      "Slice garlic thinly.",
      "Heat olive oil and sauté garlic and red pepper flakes.",
      "Add cooked spaghetti to the pan.",
      "Serve with chopped parsley on top.",
    ],
  },
  {
    id: 101,
    name: "Creamy Mushroom Soup",
    imageUrl: image2,
    servings: 4,
    timeToMake: "40 mins",
    ingredients: [
      { item: "Mushrooms", quantity: "500g" },
      { item: "Onion", quantity: "1" },
      { item: "Garlic", quantity: "2 cloves" },
      { item: "Cream", quantity: "200ml" },
      { item: "Vegetable stock", quantity: "500ml" },
      { item: "Butter", quantity: "2 tbsp" },
    ],
    directions: [
      "Melt butter and sauté onions and garlic.",
      "Add chopped mushrooms and cook for 10 minutes.",
      "Add vegetable stock and simmer for 20 minutes.",
      "Blend until smooth.",
      "Stir in cream and heat for another 5 minutes.",
    ],
  },
  {
    id: 102,
    name: "Tomato Salad",
    imageUrl: image3,
    servings: 4,
    timeToMake: "10 mins",
    ingredients: [
      { item: "Tomatoes", quantity: "4" },
      { item: "Olive oil", quantity: "50ml" },
      { item: "Basil", quantity: "A handful" },
      { item: "Feta cheese", quantity: "100g" },
    ],
    directions: [
      "Chop tomatoes into chunks.",
      "Tear basil into small pieces.",
      "Mix tomatoes, basil, and feta in a bowl.",
      "Drizzle with olive oil before serving.",
    ],
  },
  {
    id: 103,
    name: "Grilled Cheese Sandwich",
    imageUrl: image4,
    servings: 2,
    timeToMake: "15 mins",
    ingredients: [
      { item: "Bread", quantity: "4 slices" },
      { item: "Butter", quantity: "4 tbsp" },
      { item: "Cheddar cheese", quantity: "100g" },
    ],
    directions: [
      "Butter the bread slices.",
      "Place cheese between two slices, butter side out.",
      "Grill until golden brown on both sides.",
    ],
  },
  {
    id: 104,
    name: "Classic Omelette",
    imageUrl: image5,
    servings: 1,
    timeToMake: "10 mins",
    ingredients: [
      { item: "Eggs", quantity: "3" },
      { item: "Milk", quantity: "2 tbsp" },
      { item: "Butter", quantity: "1 tbsp" },
      { item: "Salt", quantity: "to taste" },
      { item: "Pepper", quantity: "to taste" },
    ],
    directions: [
      "Whisk eggs, milk, salt, and pepper.",
      "Melt butter in a pan.",
      "Pour egg mixture into the pan.",
      "Cook until set, then fold and serve.",
    ],
  },
  {
    id: 105,
    name: "Potato Wedges",
    imageUrl: image6,
    servings: 4,
    timeToMake: "45 mins",
    ingredients: [
      { item: "Potatoes", quantity: "4 large" },
      { item: "Olive oil", quantity: "50ml" },
      { item: "Salt", quantity: "1 tsp" },
      { item: "Paprika", quantity: "1 tsp" },
    ],
    directions: [
      "Preheat oven to 200°C.",
      "Cut potatoes into wedges.",
      "Toss with olive oil, salt, and paprika.",
      "Bake for 30-40 minutes or until golden brown.",
    ],
  },
  {
    id: 106,
    name: "Chocolate Mug Cake",
    imageUrl: image7,
    servings: 1,
    timeToMake: "5 mins",
    ingredients: [
      { item: "All-purpose flour", quantity: "4 tbsp" },
      { item: "Cocoa powder", quantity: "2 tbsp" },
      { item: "Sugar", quantity: "3 tbsp" },
      { item: "Milk", quantity: "3 tbsp" },
      { item: "Vegetable oil", quantity: "1 tbsp" },
      { item: "Baking powder", quantity: "1/2 tsp" },
    ],
    directions: [
      "Mix all ingredients in a microwave-safe mug.",
      "Microwave on high for 90 seconds.",
      "Let cool for a minute, then enjoy!",
    ],
  },
  {
    id: 107,
    name: "Berry Smoothie",
    imageUrl: image8,
    servings: 2,
    timeToMake: "5 mins",
    ingredients: [
      { item: "Mixed berries", quantity: "1 cup" },
      { item: "Banana", quantity: "1" },
      { item: "Yogurt", quantity: "1/2 cup" },
      { item: "Honey", quantity: "1 tbsp" },
    ],
    directions: [
      "Combine all ingredients in a blender.",
      "Blend until smooth.",
      "Pour into glasses and serve immediately.",
    ],
  },
  {
    id: 108,
    name: "Chicken Caesar Salad",
    imageUrl: image9,
    servings: 2,
    timeToMake: "25 mins",
    ingredients: [
      { item: "Chicken breasts", quantity: "2" },
      { item: "Romaine lettuce", quantity: "1 head" },
      { item: "Caesar dressing", quantity: "100ml" },
      { item: "Parmesan cheese", quantity: "50g" },
      { item: "Croutons", quantity: "1 cup" },
    ],
    directions: [
      "Grill chicken breasts until fully cooked.",
      "Chop romaine lettuce into bite-sized pieces.",
      "Toss lettuce, sliced chicken, croutons, and dressing in a bowl.",
      "Top with shaved parmesan cheese before serving.",
    ],
  },
  {
    id: 109,
    name: "French Toast",
    imageUrl: image10,
    servings: 4,
    timeToMake: "20 mins",
    ingredients: [
      { item: "Bread", quantity: "4 slices" },
      { item: "Eggs", quantity: "2" },
      { item: "Milk", quantity: "150ml" },
      { item: "Vanilla extract", quantity: "1 tsp" },
      { item: "Cinnamon", quantity: "1 tsp" },
      { item: "Butter", quantity: "2 tbsp" },
    ],
    directions: [
      "Whisk eggs, milk, vanilla extract, and cinnamon together in a bowl.",
      "Soak bread slices in the mixture.",
      "Heat butter in a pan and cook bread until golden brown on both sides.",
      "Serve with syrup or powdered sugar.",
    ],
  },
  {
    id: 110,
    name: "Tuna Salad",
    imageUrl: image11,
    servings: 2,
    timeToMake: "10 mins",
    ingredients: [
      { item: "Canned tuna", quantity: "200g" },
      { item: "Mayonnaise", quantity: "3 tbsp" },
      { item: "Dijon mustard", quantity: "1 tsp" },
      { item: "Red onion", quantity: "1/4" },
      { item: "Celery", quantity: "1 stalk" },
      { item: "Lettuce", quantity: "4 leaves" },
    ],
    directions: [
      "Drain tuna and place in a bowl.",
      "Chop red onion and celery finely.",
      "Mix tuna, mayonnaise, mustard, onion, and celery.",
      "Serve on lettuce leaves.",
    ],
  },
  {
    id: 111,
    name: "Fruit Parfait",
    imageUrl: image12,
    servings: 2,
    timeToMake: "10 mins",
    ingredients: [
      { item: "Greek yogurt", quantity: "200g" },
      { item: "Granola", quantity: "1 cup" },
      { item: "Mixed fruits", quantity: "1 cup" },
      { item: "Honey", quantity: "2 tbsp" },
    ],
    directions: [
      "Layer yogurt, granola, and fruits in a glass.",
      "Repeat the layering.",
      "Drizzle honey on top before serving.",
    ],
  },
  {
    id: 112,
    name: "Beef Stir Fry",
    imageUrl: image13,
    servings: 2,
    timeToMake: "30 mins",
    ingredients: [
      { item: "Beef strips", quantity: "200g" },
      { item: "Mixed vegetables", quantity: "2 cups" },
      { item: "Soy sauce", quantity: "50ml" },
      { item: "Garlic", quantity: "2 cloves" },
      { item: "Vegetable oil", quantity: "2 tbsp" },
    ],
    directions: [
      "Heat oil in a pan.",
      "Sauté garlic until fragrant.",
      "Add beef and cook until browned.",
      "Add vegetables and soy sauce, stir fry until veggies are tender.",
      "Serve with rice.",
    ],
  },
  {
    id: 113,
    name: "Potato Soup",
    imageUrl: image14,
    servings: 4,
    timeToMake: "45 mins",
    ingredients: [
      { item: "Potatoes", quantity: "4 large" },
      { item: "Onion", quantity: "1" },
      { item: "Garlic", quantity: "2 cloves" },
      { item: "Chicken stock", quantity: "500ml" },
      { item: "Cream", quantity: "100ml" },
      { item: "Butter", quantity: "2 tbsp" },
    ],
    directions: [
      "Melt butter and sauté onions and garlic.",
      "Add diced potatoes and cook for 5 minutes.",
      "Add chicken stock and simmer until potatoes are soft.",
      "Blend until smooth, then stir in cream and heat through.",
    ],
  },
  {
    id: 114,
    name: "Baked Salmon",
    imageUrl: image15,
    servings: 2,
    timeToMake: "20 mins",
    ingredients: [
      { item: "Salmon fillets", quantity: "2" },
      { item: "Lemon", quantity: "1" },
      { item: "Olive oil", quantity: "2 tbsp" },
      { item: "Dill", quantity: "1 tsp" },
    ],
    directions: [
      "Preheat oven to 200°C.",
      "Place salmon on a baking sheet.",
      "Drizzle with olive oil and sprinkle with dill.",
      "Slice lemon and place on top of salmon.",
      "Bake for 15-20 minutes or until salmon is cooked through.",
    ],
  },
  {
    id: 115,
    name: "Guacamole",
    imageUrl: image16,
    servings: 4,
    timeToMake: "15 mins",
    ingredients: [
      { item: "Avocados", quantity: "3" },
      { item: "Tomato", quantity: "1" },
      { item: "Onion", quantity: "1/2" },
      { item: "Lime", quantity: "1" },
      { item: "Cilantro", quantity: "A handful" },
      { item: "Salt", quantity: "to taste" },
    ],
    directions: [
      "Mash avocados in a bowl.",
      "Chop tomato, onion, and cilantro finely.",
      "Mix all ingredients together.",
      "Squeeze lime juice and add salt to taste.",
      "Stir well and serve with tortilla chips.",
    ],
  },
  {
    id: 116,
    name: "Easy Beef Tacos",
    imageUrl: image17,
    servings: 4,
    timeToMake: "20 mins",
    ingredients: [
      { item: "Ground beef", quantity: "500g" },
      { item: "Taco seasoning", quantity: "1 packet" },
      { item: "Taco shells", quantity: "8" },
      { item: "Lettuce", quantity: "1 head" },
      { item: "Cheddar cheese", quantity: "100g" },
    ],
    directions: [
      "Cook the ground beef with seasoning in a skillet.",
      "Heat the taco shells in the oven as per the package.",
      "Chop the lettuce and grate the cheese.",
      "Assemble tacos with beef, lettuce, and cheese.",
      "Serve immediately and enjoy.",
    ],
  },
  {
    id: 117,
    name: "Vegetable Pasta",
    imageUrl: image18,
    servings: 4,
    timeToMake: "15 mins",
    ingredients: [
      { item: "Fusilli pasta", quantity: "400g" },
      { item: "Olive oil", quantity: "2 tbsp" },
      { item: "Cherry tomatoes", quantity: "200g" },
      { item: "Spinach", quantity: "100g" },
      { item: "Parmesan cheese", quantity: "50g" },
    ],
    directions: [
      "Cook pasta as per the package instructions.",
      "Heat oil and sauté cherry tomatoes for 5 mins.",
      "Add spinach and cook until wilted.",
      "Mix in the cooked pasta.",
      "Serve topped with grated parmesan.",
    ],
  },
];
