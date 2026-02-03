import CartItems from "./components/cartItems/CartItems"
import RecipeCard from "./components/recipeCard/RecipeCard"

const { poppins } = require("../layout")

const getRecipes = async () => {
  const response = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random')

  const result = await response.json()

  return result.foods
}

const Recipes = async () => {
  const recipes = await getRecipes()

  return (
    <>
      <section className="custom-container my-20">
        <h2 className={`${poppins.className} text-5xl font-bold text-center`}>
          Discover
          <br />
          <span className="text-amber-200">Mouthwatering</span> Recipes!
        </h2>
      </section>
      <section className="custom-container my-20 grid grid-cols-13 gap-4">
        <div className="col-span-10 grid grid-cols-3 justify-items-center gap-y-10">
          {
            recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
            ))
          }
        </div>
        <div className="col-span-3">
          <CartItems></CartItems>
        </div>
      </section>
    </>
  )
}

export default Recipes
