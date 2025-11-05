"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Measure height dynamically whenever data changes
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // Animate line height and opacity
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative c-space section-spacing min-h-[200vh]" // ensures enough scroll area
    >
      <h2 className="text-heading">My Work Experience</h2>

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex justify-start pt-20 md:pt-40 md:gap-10"
          >
            {/* Left column (date & title) */}
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[18px] bg-gray-900">
                <div className="w-3 h-3 border rounded-full bg-neutral-700 border-neutral-500" />
              </div>

              <div className="hidden flex-col gap-2 text-xl font-bold md:flex md:pl-20 md:text-3xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-neutral-400">{item.title}</h3>
                <h3 className="text-neutral-500">{item.job}</h3>
              </div>
            </div>

            {/* Right column (contents) */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden space-y-1">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>

              {item.contents.map((content, i) => (
                <p key={i} className="mb-3 font-normal text-neutral-400">
                  {content}
                </p>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Animated vertical line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-5 top-0 overflow-hidden w-[2px] bg-neutral-800 rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-purple-300 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
