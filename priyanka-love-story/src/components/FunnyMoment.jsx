import { motion } from "framer-motion";
import funnyPhoto from "../assets/photos/photo_funny.jpeg";

function FunnyMoment() {

  return (
    <section className="funny-section">

      <motion.h2
        className="funny-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        One Funny Thought 😄
      </motion.h2>

      <motion.img
        src={funnyPhoto}
        alt="Funny moment"
        className="funny-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.p
        className="funny-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        If I ever get the chance…
        I might just replace anyone standing next to you 😌
      </motion.p>

    </section>
  );
}

export default FunnyMoment;