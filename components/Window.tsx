"use client";

import { useRef, useState, useEffect } from "react";

export default function Window({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState({ x: 120, y: 120 });

  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!dragging.current) return;

      setPos({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    };

    const handleUp = () => {
      dragging.current = false;
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
      }}
      className="border border-cyan-500 bg-black/80 text-white w-72 rounded shadow-lg"
    >
      <div
        onMouseDown={onMouseDown}
        className="px-3 py-2 cursor-move text-cyan-300 border-b border-cyan-500/30"
      >
        {title}
      </div>

      <div className="p-3 text-sm">
        {children}
      </div>
    </div>
  );
}