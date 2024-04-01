import { useState } from "react";
import "./App.css";
/* 
const Feedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState([]);

  const handleChangeEvent = (event, questionId) => {
    const value = event.target.value;
    setCurrentFeedback((prevValue) => {
      const updatedObj = prevValue.filter((option) => option.id !== questionId);
      return [...updatedObj, { id: questionId, value: value }];
    });
    console.log(currentFeedback);
  };

  const questions = [
    {
      id: 1,
      question: "Rate the overall experience:",
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    {
      id: 2,
      question: "How likely are you to recommend us to a friend or colleague?",
      options: ["Very Likely", "Likely", "Unlikely", "Very Unlikely"],
    },
  ];

  return (
    <div>
      <h1>Feedback App</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <ul>
            {question.options.map((opt, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={opt}
                    name={`set_${question.id}`}
                    onChange={(event) => handleChangeEvent(event, question.id)}
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
 */

const Feedback = () => {
  const [currentFedback, setCurrentFeedback] = useState([]);
  const [feedbackAnswer, setFeedbackAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Rate the overall experience:",
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    {
      id: 2,
      question: "How likely are you to recommend us to a friend or colleague?",
      options: ["Very Likely", "Likely", "Unlikely", "Very Unlikely"],
    },
  ];

  const handleChangeEvent = (event, objId) => {
    const value = event.target.value;
    setCurrentFeedback((prevValue) => {
      const updatedObj = prevValue.filter((obj) => obj.id !== objId);
      return [...updatedObj, { id: objId, value: value }];
    });
    console.log(currentFedback);
  };

  const handleButtonClick = () => {
    setFeedbackAnswer(true);
  };

  return (
    <div>
      <h1>Feedback App</h1>
      {!feedbackAnswer && (
        <>
          {questions.map((questionObj) => (
            <div key={questionObj.id}>
              <h3>{questionObj.question}</h3>
              <ul>
                {questionObj.options.map((opt, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        value={opt}
                        name={`${questionObj.id}`}
                        onChange={(event) =>
                          handleChangeEvent(event, questionObj.id)
                        }
                      />
                      {opt}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button onClick={handleButtonClick}>Submit</button>
        </>
      )}
      {feedbackAnswer && (
        <>
          <h2>Thank You for Your Feedback!</h2>
          <p>
            Your Answers: {currentFedback.map((obj) => obj.value).join(", ")}
          </p>
        </>
      )}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <Feedback />
    </main>
  );
}
