import { connect } from "@/app/lib/dbConnect"
import { revalidatePath } from "next/cache"

const feedbackCollection = connect("feedbackCollection")

export const GET = async (request) => {
  const cursor = feedbackCollection.find()

  const result = await cursor.toArray()

  return Response.json(result)
}

export const POST = async (request) => {
  const body = await request.json()

  const { message } = body

  if (!message || typeof message !== 'string') {
    return Response.json({
      status: 400,
      messge: "Invalid Format: Feedback message"
    })
  }

  const newFeedback = {
    createdAt: new Date(),
    message
  }

  const result = await feedbackCollection.insertOne(newFeedback)

  if (result.insertedId) {
    revalidatePath("/feedback")
  }

  return Response.json(result)
}
