import { connect } from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"

const feedbackCollection = connect("feedbackCollection")

export const DELETE = async (request, { params }) => {
  const { id } = await params

  const filter = { _id: new ObjectId(id) }

  const result = await feedbackCollection.deleteOne(filter)

  if (result.deletedCount) {
    revalidatePath("/feedback")
  }

  return Response.json(result)
}
