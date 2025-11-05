import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { damping: 50, stiffness: 100 });

  // Parallax depth effects
  const mountain3Y = useTransform(smoothScroll, [0, 1], ["0%", "80%"]);
  const planetsX = useTransform(smoothScroll, [0, 1], ["0%", "-30%"]);
  const mountain2Y = useTransform(smoothScroll, [0, 1], ["0%", "50%"]);
  const mountain1Y = useTransform(smoothScroll, [0, 1], ["0%", "20%"]);

  return (
    <section className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Sky */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/sky.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />

      {/* Farthest mountains */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/mountain-3.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain3Y,
          zIndex: 1,
        }}
      />

      {/* Planets */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/planets.png)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          x: planetsX,
          zIndex: 2,
        }}
      />

      {/* Mid mountains */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/mountain-2.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain2Y,
          zIndex: 3,
        }}
      />

      {/* Front mountains */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/mountain-1.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain1Y,
          zIndex: 4,
        }}
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-[5]" />
    </section>
  );
};

export default ParallaxBackground;
