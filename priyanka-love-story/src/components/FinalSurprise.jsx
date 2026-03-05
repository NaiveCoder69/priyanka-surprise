import { useState } from "react";
import confetti from "canvas-confetti";

function FinalSurprise() {

  const [showMessage, setShowMessage] = useState(false);

  const message = "Thank you for being in my life. I love you, Priyanka ❤️";

  const handleClick = () => {

    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.6 }
    });

    setShowMessage(true);
  };

  return (
    <section className="final-section">

      <h2 className="final-title">
        One Last Question ❤️
      </h2>

      <p className="final-text">
        Priyanka, will you keep being the most important
        person in my life?
      </p>

      <button className="final-button" onClick={handleClick}>
        Of Course I Will 💖
      </button>

      {showMessage && (
        <p className="final-message">
          {message}
        </p>
      )}

    </section>
  );
}

export default FinalSurprise;