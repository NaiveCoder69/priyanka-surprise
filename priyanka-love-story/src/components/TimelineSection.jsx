import { motion } from "framer-motion";

function TimelineSection() {

  const moments = [
    "It all started somewhere unexpected.",
    "The gym.",
    "Our first conversation was completely random.",
    "But somehow those random conversations became my favorite.",
    "Then we started talking on Instagram.",
    "And slowly, I started enjoying your company more than I expected.",
    "One day we were just walking.",
    "You moved your hair a little.",
    "And I remember thinking…",
    "How can someone be this beautiful?",
    "Before I realized it, I had already started sharing my personal things with you.",
    "And somewhere between those small moments…",
    "You became someone very important to me."
  ];

  return (
    <section className="timeline-section">

      {moments.map((moment, index) => (
        <motion.p
          key={index}
          className="timeline-line"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {moment}
        </motion.p>
      ))}

    </section>
  );
}

export default TimelineSection;