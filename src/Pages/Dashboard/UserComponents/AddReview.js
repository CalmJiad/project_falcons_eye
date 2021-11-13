import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const [feedbackData, setFeedBackData] = useState({});

  const handleOnBlur = (e) => {
    const comment = e.target.value;
    const feedback = { userName: user?.displayName, comment: comment };
    console.log(feedback);
    setFeedBackData(feedback);
  };

  const handleReviewSubmit = (e) => {
    if (feedbackData) {
      axios.post("http://localhost:5000/reviews", feedbackData).then((res) => {
        //  Showing alert
        if (res.data.insertedId) {
          alert("Review Added Successfully");
          //   Form resetting
        }
      });
    }
    e.preventDefault();
  };

  return (
    <div className="">
      <h2 className="text-center mt-3">
        Got any <span className="text-success">Feedback</span> Sir? <br />{" "}
        Please, Let us know!
      </h2>
      <div className="w-50 m-auto">
        <form onSubmit={handleReviewSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Username
            </label>
            <input
              type="name"
              class="form-control"
              value={user?.displayName}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Feedback Message
            </label>
            <textarea
              onBlur={handleOnBlur}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
