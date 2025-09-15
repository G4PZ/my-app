"use client";
import cx from "@/Utils/cx";
import React, { useState } from "react";

interface CardPosterProps {
  image: string;
  title: string;
  description: string;
  alt: string;
  typeCard?: string;
}

export default function CardPoster({
  image,
  title,
  description,
  alt,
  typeCard = "playlist",
}: CardPosterProps) {
  const [isHover, setIsHover] = useState(false);
  const isArtist = typeCard === "artist";
  const radius = isArtist ? "rounded-full" : "rounded-[6px]";

  const imageWrapperCls = cx(
    "relative w-[160px] h-[160px]",
    radius,
    isArtist ? "overflow-visible" : "overflow-hidden"
  );

  const playBtnPos = isArtist
    ? "absolute -bottom-3 right-2"
    : "absolute bottom-2 right-2";

  return (
    <div
      className={cx(
        "group rounded-xl p-2 cursor-pointer transition-colors duration-200 hover:bg-gradient-to-t from-fondoHouse via-fondoHouse to-fondoHouse",
        isArtist && "pb-4" //
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={imageWrapperCls}>
        <img
          src={image}
          alt={alt}
          className={cx("w-full h-full object-cover", radius)}
        />

        <div
          className={cx(
            "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none",
            radius
          )}
        />

        {isHover && (
          <button
            type="button"
            title={`Reproducir ${title}`}
            aria-label={`Reproducir ${title}`}
            className={cx(
              playBtnPos,
              "grid place-items-center w-10 h-10 rounded-full bg-green-500 shadow-lg transition-transform duration-200 hover:scale-105"
            )}
          >
            <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-black">
              <title>Reproducir {title}</title>
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
            </svg>
          </button>
        )}
      </div>

      <h2 className="mt-2 text-white font-semibold hover:underline">{title}</h2>
      <p className="text-house font-semibold hover:underline text-sm">
        {description}
      </p>
    </div>
  );
}
