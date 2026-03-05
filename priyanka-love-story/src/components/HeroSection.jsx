import { motion } from "framer-motion";
import "../styles/romantic.css";
import photo1 from "../assets/photos/photo1.jpeg";

function HeroSection() {
  return (
    <section className="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >

        <img src={photo1} alt="Priyanka" className="hero-photo" />

        <h1 className="hero-title">
          For <span>Priyanka ❤️</span>
        </h1>

        <p className="hero-text">
  Every part of this was made thinking about you.
</p>

<p className="hero-subtext">
  Every page here holds a small piece
  of how much you mean to me.
</p>

        <div className="scroll-indicator">
          ↓ Scroll to begin our story ↓
        </div>

      </motion.div>

    </section>
  );
}

export default HeroSection;