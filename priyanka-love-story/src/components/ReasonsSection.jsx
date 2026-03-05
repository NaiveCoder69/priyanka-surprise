import { useState } from "react";

function ReasonsSection() {

  const reasons = [
    "Your smile makes everything brighter.",
    "You make normal days feel special.",
    "Talking to you makes my day better.",
    "Your kindness is beautiful.",
    "You always care about the smallest things.",
    "Your laugh is my favorite sound.",
    "You make me feel understood.",
    "You bring peace to my mind.",
    "Your presence makes everything better.",
    "You make life more exciting.",
    "You always try to understand me.",
    "You make me want to become a better person.",
    "Your smile can fix my whole day.",
    "You make even silence comfortable.",
    "You care deeply about people.",
    "You are incredibly beautiful.",
    "Your personality is rare.",
    "You make conversations feel effortless.",
    "You always listen patiently.",
    "You make me feel lucky.",
    "You are strong in ways you don't even realize.",
    "You make small moments memorable.",
    "Your voice is calming.",
    "You always show genuine care.",
    "You bring warmth into my life.",
    "You make happiness feel easy.",
    "You have a beautiful heart.",
    "You make me feel important.",
    "You always try to support me.",
    "You make the world feel lighter.",
    "You make my days brighter.",
    "You make conversations fun.",
    "You are thoughtful.",
    "You make everything feel peaceful.",
    "You make life feel meaningful.",
    "You are incredibly special.",
    "You bring positivity everywhere.",
    "You are someone truly rare.",
    "You make me feel safe sharing things.",
    "You have the most beautiful smile.",
    "You care more than most people do.",
    "You are gentle and kind.",
    "You make every day better.",
    "You are unforgettable.",
    "You make life sweeter.",
    "You make happiness simple.",
    "You are one of a kind.",
    "You make my life better just by being in it.",
    "You are amazing just the way you are.",
    "And most importantly… because you are you."
  ];

  const [selectedReason, setSelectedReason] = useState(null);

  return (
    <section className="reasons-section">

      <h2 className="reasons-title">
        Reasons I Love You ❤️
      </h2>

      <div className="hearts-grid">

        {reasons.map((reason, index) => (
          <div
            key={index}
            className="heart-card"
            onClick={() => setSelectedReason(reason)}
          >
            ❤️
          </div>
        ))}

      </div>

      {selectedReason && (
        <div
          className="reason-modal"
          onClick={() => setSelectedReason(null)}
        >
          <div className="reason-text">
            {selectedReason}
          </div>
        </div>
      )}

    </section>
  );
}

export default ReasonsSection;