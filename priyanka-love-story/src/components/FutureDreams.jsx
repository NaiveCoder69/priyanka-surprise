import { motion } from "framer-motion";

function FutureDreams() {

  const dreams = [
    "Watching beautiful sunsets together",
    "Traveling to new places side by side",
    "Laughing about the smallest and silliest things",
    "Creating unforgettable memories",
    "Supporting each other in every moment",
    "Growing old together with the same love"
  ];

  return (
    <section className="dreams-section">

      <motion.h2
        className="dreams-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Dreams I Have With You ✨
      </motion.h2>

      <div className="dreams-list">

        {dreams.map((dream, index) => (
          <motion.div
            key={index}
            className="dream-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            💖 {dream}
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default FutureDreams;