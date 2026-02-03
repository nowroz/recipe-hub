import Image from "next/image"

const RecipeCard = ({ recipe }) => {
  const {
    title,
    foodImg,
    price,
    category
  } = recipe

  return (
    <div className="w-72 flex flex-col">
      <Image width={288} height={288} src={foodImg} alt="" className="w-72 h-auto"></Image>
      <div className="flex-1 bg-white p-4 flex flex-col justify-between gap-5">
        <h4 className="text-3xl font-bold text-black">{title}</h4>
        <div>
          <p className="text-slate-500 mb-4">{category}</p>
          <h3 className="text-4xl font-bold text-black mb-6">&#2547;{price}</h3>

          <div className="flex items-center justify-between text-black">
            <button className="cursor-pointer">Add to Cart</button>
            <button className="cursor-pointer">View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
