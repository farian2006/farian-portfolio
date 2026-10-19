"use client";

import { useState, useEffect } from "react";

interface TypewriterNameProps {
  name?: string;
  className?: string;
}

export default function TypewriterName({
  name = "FARIAN TAZWAR",
  className = "",
}: TypewriterNameProps) {
  const [displayedText, setDisplayedText] = useState(name);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial pause on load so full name is clearly readable first
    if (!hasStarted) {
      const initialTimer = setTimeout(() => {
        setHasStarted(true);
        setIsDeleting(true);
      }, 2500);
      return () => clearTimeout(initialTimer);
    }

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === name) {
      // Pause at full name before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayedText === "") {
      // Brief pause when empty before re-typing
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      // Realistic typing and deleting speeds
      const speed = isDeleting ? 70 : 120;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? name.substring(0, prev.length - 1)
            : name.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, hasStarted, name]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.9em] w-[3px] bg-primary animate-blink align-baseline"
      />
    </span>
  );
}
