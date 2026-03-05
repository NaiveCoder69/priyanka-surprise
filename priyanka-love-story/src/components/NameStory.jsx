import { motion } from "framer-motion";

function NameStory() {
  return (
    <section className="name-section">

      <motion.h1
        className="names"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        Priyanka <span className="heart-beat">❤️</span> Priyanshu
      </motion.h1>

      <motion.p
        className="name-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        I used to think it was just a coincidence
        that our names sounded so similar.
        <br/><br/>
        But now it feels like
        they were always meant to be said together.
      </motion.p>

    </section>
  );
}

export default NameStory;