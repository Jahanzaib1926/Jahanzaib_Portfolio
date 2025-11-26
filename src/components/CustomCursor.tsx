import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device has a mouse (desktop)
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    setIsDesktop(hasMouse);
  }, []);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Check for hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-300 ease-out ${
          isHovering ? 'scale-125' : 'scale-100'
        } ${isClicking ? 'scale-90' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.25)' : 'scale(1)'} ${isClicking ? 'scale(0.9)' : ''}`,
        }}
      >
        <div
          className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
            isHovering
              ? 'bg-teal-500/30 border-teal-500 dark:bg-teal-400/30 dark:border-teal-400'
              : 'bg-teal-500/20 border-teal-600 dark:bg-teal-400/20 dark:border-teal-400'
          } ${isClicking ? 'bg-teal-600 border-teal-700 dark:bg-teal-500 dark:border-teal-400' : ''}`}
        />
      </div>

      {/* Outer Cursor Ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-all duration-500 ${
            isHovering
              ? 'border-teal-500/50 dark:border-teal-400/50 scale-125'
              : 'border-teal-500/30 dark:border-teal-400/30 scale-100'
          } ${isClicking ? 'scale-90 border-teal-600 dark:border-teal-500' : ''}`}
        />
      </div>

      {/* Animated Trail Effect */}
      <div
        className="fixed pointer-events-none z-[9997] transition-opacity duration-1000"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 0.3 : 0.1,
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 blur-xl animate-pulse" />
      </div>
    </>
  );
};

