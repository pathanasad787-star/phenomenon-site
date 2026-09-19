'use client';
import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (cursorRef.current) cursorRef.current.style.display = isMobile ? 'none' : 'block';
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ left: position.x, top: position.y }}
      className={`fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-primary/20 transition-all duration-200 ${
        isHovering ? 'w-12 h-12 bg-primary/30' : 'w-8 h-8'
      }`}
    />
  );
}