'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loader() {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Container das imagens */}
      <div className="flex items-center gap-2 sm:gap-3 mb-8">
        {/* Logo iArremate */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/iArremateLegacyRedcut.png"
            alt="iArremate Logo"
            width={100}
            height={100}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            quality={100}
            priority
          />
        </motion.div>

        {/* Loader1 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/images/loader1.png"
            alt="Loader"
            width={200}
            height={100}
            className="h-20 sm:h-24 w-auto object-contain"
            quality={100}
            priority
          />
        </motion.div>
      </div>

      {/* Pontos animados */}
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-[#222344] rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
