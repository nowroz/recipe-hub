import Image from "next/image"
import AddToCartButton from "./components/addToCartButton/AddToCartButton"
import Link from "next/link"

const RecipeCard = ({ recipe }) => {
  const {
    id,
    title,
    foodImg,
    price,
    category
  } = recipe

  return (
    <div className="w-[300] flex flex-col">
      <Image width={300} height={300} src={foodImg} alt="" className="w-75 h-auto"></Image>
      <div className="flex-1 bg-white p-4 flex flex-col justify-between gap-5">
        <h4 className="text-3xl font-bold text-black">{title}</h4>
        <div>
          <p className="text-slate-500 mb-4">{category}</p>
          <h3 className="text-4xl font-bold text-black mb-6">&#2547;{price}</h3>

          <div className="flex items-center justify-between text-black">
            <AddToCartButton recipe={recipe}></AddToCartButton>
            <Link href={`/recipes/${id}`} className="cursor-pointer hover:underline">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
