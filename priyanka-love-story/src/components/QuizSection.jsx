import { useState } from "react";

function QuizSection() {

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  return (
    <section className="quiz-section">

      <h2 className="quiz-title">
        A Few Fun Questions 😌
      </h2>

      {/* Question 1 */}

      <div className="quiz-question">

        <h3>If Priyanshu had to choose his favorite person in the world?</h3>

        <div className="quiz-buttons">

          <button
            onClick={() =>
              setAnswer1("Correct answer. It has always been you ❤️")
            }
          >
            Priyanka
          </button>

          <button
            onClick={() =>
              setAnswer1("Still Priyanka. There was never another option 😌")
            }
          >
            Obviously Priyanka
          </button>

        </div>

        {answer1 && (
          <p className="quiz-response">{answer1}</p>
        )}

      </div>

      {/* Question 2 */}

      <div className="quiz-question">

        <h3>What is Priyanshu's favorite place?</h3>

        <div className="quiz-buttons">

          <button
            onClick={() =>
              setAnswer2("Nice guess… but the real answer is wherever you are ❤️")
            }
          >
            The Gym
          </button>

          <button
            onClick={() =>
              setAnswer2("Correct. Wherever Priyanka is.")
            }
          >
            Wherever Priyanka is
          </button>

        </div>

        {answer2 && (
          <p className="quiz-response">{answer2}</p>
        )}

      </div>

      {/* Question 3 */}

      <div className="quiz-question">

        <h3>Who has the most beautiful smile?</h3>

        <div className="quiz-buttons">

          <button
            onClick={() =>
              setAnswer3("Correct. Your smile can fix my whole day.")
            }
          >
            Priyanka
          </button>

          <button
            onClick={() =>
              setAnswer3("Still Priyanka. No competition.")
            }
          >
            The girl reading this
          </button>

        </div>

        {answer3 && (
          <p className="quiz-response">{answer3}</p>
        )}

      </div>

    </section>
  );
}

export default QuizSection;