import { poppins } from "@/app/layout"
import Image from "next/image"
import Link from "next/link"
import { FaLongArrowAltLeft } from "react-icons/fa"


const getRecipe = async (id) => {
  const response = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)

  const result = await response.json()

  return result.details
}


export const generateMetadata = async ({ params }) => {
  const { id } = await params

  const recipe = await getRecipe(id)

  const { title } = recipe

  return {
    title
  }
}

const RecipeDetails = async ({ params }) => {
  const { id } = await params

  const recipe = await getRecipe(id)

  const { title, foodImg } = recipe

  return (
    <>
      <section className="custom-container my-20">
        <Link href="/recipes" className="flex items-center gap-2">
          <FaLongArrowAltLeft></FaLongArrowAltLeft>
          Go to Recipes</Link>
      </section>
      <section className="custom-container my-20">
        <div className="flex gap-10">
          <Image width={300} height={300} src={foodImg} alt={title} className="w-75 h-auto"></Image>
          <h2 className={`${poppins.className} text-5xl font-bold text-center`}>
            {title}
          </h2>
        </div>
      </section>
    </>
  )
}

export default RecipeDetails
