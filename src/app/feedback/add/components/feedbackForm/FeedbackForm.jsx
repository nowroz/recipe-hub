"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const FeedbackForm = () => {
  const router = useRouter()

  const handleAddFeedback = async (event) => {
    event.preventDefault()

    const form = event.target

    const message = form.feedbackMessage.value.trim()

    const response = await fetch(`http://localhost:3000/api/feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ message })
    })

    const result = await response.json()

    if (result.insertedId) {
      toast.success("Feedback has been posted!")

      router.push("/feedback")
    }
  }


  return (
    <div className="flex justify-center">
      <form onSubmit={handleAddFeedback} className="flex flex-col items-center gap-4">
        <textarea rows={4} cols={50} name="feedbackMessage" id="feedbackMessage" required className="border rounded-2xl p-4 focus:outline-none focus:border-amber-200"></textarea>

        <button className="bg-amber-200 px-3 py-1 rounded-xl text-black font-bold flex items-center gap-2 cursor-pointer active:scale-[99%]">
          Post
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm
