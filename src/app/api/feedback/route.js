import { connect } from "@/app/lib/dbConnect"

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

  return Response.json(result)
}
