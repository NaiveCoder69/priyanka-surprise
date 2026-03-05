import { useState } from "react";

function LoveReasons() {

  const reasons = [
    { title: "Your Smile", message: "Because it makes my whole day brighter." },
    { title: "Your Kindness", message: "You care about people in the most beautiful way." },
    { title: "Your Voice", message: "Listening to you talk always makes me happy." },
    { title: "Your Laugh", message: "It's one of my favorite sounds in the world." },
    { title: "The Way You Care", message: "You make people feel special." },
    { title: "Your Presence", message: "Everything feels better when you're around." }
  ];

  const [flipped, setFlipped] = useState(null);

  const handleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section className="reasons-section">

      <h2 className="reasons-title">
        Things I Love About You ❤️
      </h2>

      <div className="reasons-grid">

        {reasons.map((reason, index) => (

          <div
            key={index}
            className={`reason-card ${flipped === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >

            <div className="card-inner">

              <div className="card-front">
                ❤️ {reason.title}
              </div>

              <div className="card-back">
                {reason.message}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default LoveReasons;