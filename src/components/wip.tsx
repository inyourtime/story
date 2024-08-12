"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Wip() {
  const LoadingDots = () => {
    const dotVariants = {
      initial: { y: 0 },
      animate: { y: -10 },
    };

    const containerVariants = {
      initial: { transition: { staggerChildren: 0.2 } },
      animate: { transition: { staggerChildren: 0.2 } },
    };

    return (
      <motion.div
        className="flex space-x-2 justify-center items-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="w-4 h-4 bg-white rounded-full shadow-md"
            variants={dotVariants}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-blue-300 to-green-300">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-72 border-4 border-opacity-30 border-blue-200 pb-2">
        <div className="text-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-full opacity-30 transform scale-75"></div>
          <Image
            src="/cat-svgrepo-com-1.svg"
            alt="WIP"
            width={150}
            height={150}
            className="mx-auto mb-6 relative z-10"
            priority={true}
          />
          <h2 className="text-2xl font-bold text-blue-600 mb-2">
            Work in Progress
          </h2>
          <p className="text-2xl mb-4">👀</p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold mb-4 text-white font-serif">
          Loading
        </p>
        <LoadingDots />
      </div>
    </div>
  );
}
