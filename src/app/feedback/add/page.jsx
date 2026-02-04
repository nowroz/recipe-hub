import { poppins } from "@/app/layout"
import FeedbackForm from "./components/feedbackForm/FeedbackForm"

const AddFeedback = () => {

  return (
    <>
      <section className="custom-container my-20">
        <h2 className={`${poppins.className} text-5xl font-bold text-center`}>
          Add New Feedback
        </h2>
      </section>
      <section className="custom-container my-20">
        <FeedbackForm></FeedbackForm>
      </section>
    </>
  )
}

export default AddFeedback
