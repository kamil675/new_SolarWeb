"use client";

import React from "react";
import { motion } from "framer-motion";

// Agar aapke images public/images ke andar hain
const allImages = Array.from(
  { length: 32 },
  (_, i) => `/images/W${i + 1}.webp`
);

// Generate photo objects automatically
const photos = allImages.map((src, i) => ({
  src,
  alt: `Black and white photo number ${i + 1}`,
  width: 400,
  height: 300,
}));

export default function BlackWhiteGallery() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-4">
      <motion.div
        className="flex space-x-4 max-w-full overflow-x-auto no-scrollbar"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
        dragElastic={0.2}
      >
        {photos.map(({ src, alt, width, height }, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 rounded-xl shadow-md overflow-hidden"
            style={{ width: width + "px", height: height + "px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* ✅ Normal img tag (Vite compatible) */}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={index < 5 ? "eager" : "lazy"}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
