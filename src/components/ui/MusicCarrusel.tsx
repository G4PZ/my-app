"use client";

import React, { useMemo, useState } from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  itemWidth?: number;
  gap?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
};

export default function MusicCarrusel({
  children,
  title,
  className = "",
  itemWidth = 176,
  gap = 16,
  slidesToShow = 6,
  slidesToScroll = 3,
}: Props) {
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex + slidesToShow < items.length;

  const next = () => canNext && setCurrentIndex((i) => i + slidesToScroll);
  const prev = () =>
    canPrev && setCurrentIndex((i) => Math.max(i - slidesToScroll, 0));

  const translateX = -(currentIndex * (itemWidth + gap));

  return (
    <div className={`relative overflow-hidden px-4 ${className}`}>
      {!!title && (
        <div className="flex justify-between py-5">
          <button className="text-white hover:underline font-bold text-2xl cursor-pointer px-2">
            {title}
          </button>
          <button className="hover:underline text-house cursor-pointer font-bold">
            Mostrar todo
          </button>
        </div>
      )}

      {canPrev && (
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 grid place-items-center rounded-full w-10 h-10 bg-black/60 hover:bg-black/80 transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-white"
            aria-hidden="true"
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
      )}

      {canNext && (
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 grid place-items-center rounded-full w-10 h-10 bg-black/60 hover:bg-black/80 transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-white"
            aria-hidden="true"
          >
            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      )}

      <div
        className="flex transition-transform duration-500 will-change-transform"
        style={{
          transform: `translateX(${translateX}px)`,
          columnGap: `${gap}px`,
        }}
      >
        {items.map((child, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: `${itemWidth}px` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
