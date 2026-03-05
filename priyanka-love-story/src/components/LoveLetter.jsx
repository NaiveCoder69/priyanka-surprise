import { motion } from "framer-motion";

function LoveLetter() {
  return (
    <section className="love-letter-section">

      <motion.h2
        className="letter-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        A Letter For You 💌
      </motion.h2>

      <motion.div
        className="letter-box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >

        <p>Dear Priyanka,</p>

<p>
Sometimes life brings someone into your world
when you least expect it.
</p>

<p>
Someone who slowly turns ordinary moments
into something special.
</p>

<p>
You walked into my life so naturally,
yet somehow you changed it in ways
I never imagined.
</p>

<p>
Your smile, your kindness,
and the way you care about the smallest things
make you someone truly rare.
</p>

<p>
And somewhere along this journey,
without even realizing it,
you became one of the most important parts of my life.
</p>

<p className="letter-end">
— Priyanshu ❤️
</p>
      </motion.div>

    </section>
  );
}

export default LoveLetter;