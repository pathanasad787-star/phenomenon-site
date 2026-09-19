'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);
  useEffect(() => setKey(pathname), [pathname]);
  return (
    <AnimatePresence mode="wait">
      <motion.div key={key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}