"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const FeedbackCard = ({ feedback }) => {
  const router = useRouter()

  const {
    _id,
    createdAt,
    message
  } = feedback

  const handleDeleteFeedback = async (id) => {
    const response = await fetch(`http://localhost:3000/api/feedback/${id}`, {
      method: "DELETE"
    })

    const result = await response.json()

    if (result.deletedCount) {
      toast.info("The feedback has been deleted.")

      router.refresh()
    }

  }

  return (
    <div className="bg-amber-200 p-4 rounded-2xl">
      <p className="text-black font-medium mb-5">{message}</p>
      <div className="flex justify-end items-center gap-3">
        <button className="px-3 py-1 rounded-lg bg-emerald-400 text-black font-bold cursor-pointer active:scale-[99%]">Update</button>
        <button onClick={() => handleDeleteFeedback(_id)} className="px-3 py-1 rounded-lg bg-red-400 text-black font-bold cursor-pointer active:scale-[99%]">Delete</button>
      </div>
    </div>
  )
}

export default FeedbackCard
