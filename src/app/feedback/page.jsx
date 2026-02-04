import { FaPlus } from "react-icons/fa"
import { poppins } from "../layout"
import FeedbackCard from "./components/feedbackCard/FeedbackCard"
import Link from "next/link"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Feedback"
}



const getFeedback = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/feedback`, {
    next: { revalidate: 60 }
  })
  const result = await response.json()

  return result
}

const Feedback = async () => {
  const feedback = await getFeedback()

  return (
    <>
      <section className="custom-container my-20">
        <h2 className={`${poppins.className} text-5xl font-bold text-center`}>
          User Feedback
        </h2>
      </section>
      <section className="custom-container my-20 flex justify-center">
        <Link href="/feedback/add" className="bg-amber-200 px-3 py-1 rounded-xl text-black font-bold flex items-center gap-2">
          <FaPlus></FaPlus>
          Add Feedback
        </Link>
      </section>
      <section className="custom-container my-20">
        <h4 className="text-3xl font-bold">Recipes Found: <span className="text-amber-200">{feedback.length}</span></h4>
      </section>
      <section className="custom-container my-20">
        <div className="grid grid-cols-3 gap-5">
          {
            feedback.map(fb => (
              <FeedbackCard key={fb._id} feedback={fb}></FeedbackCard>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Feedback
