function FloatingHearts() {

  const hearts = Array.from({ length: 35 });

  return (
    <div className="floating-hearts">

      {hearts.map((_, index) => (
        <span
          key={index}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            fontSize: 16 + Math.random() * 20 + "px",
            animationDuration: 8 + Math.random() * 8 + "s",
            animationDelay: Math.random() * 5 + "s"
          }}
        >
          ❤️
        </span>
      ))}

    </div>
  );
}

export default FloatingHearts;