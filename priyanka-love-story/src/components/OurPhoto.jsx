import { motion } from "framer-motion";
import together from "../assets/photos/together1.jpeg";

function OurPhoto() {
  return (
    <section className="our-photo-section">

      <motion.h2
        className="our-photo-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Favorite Moment ❤️
      </motion.h2>

      <motion.img
        src={together}
        alt="Us together"
        className="our-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.p
        className="our-photo-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Some moments in life become unforgettable.
      </motion.p>

    </section>
  );
}

export default OurPhoto;