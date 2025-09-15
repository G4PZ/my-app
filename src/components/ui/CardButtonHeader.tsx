import React from "react";
interface CardButtonHeaderProps {
  title: string;
}

export default function CardButtonHeader({ title }: CardButtonHeaderProps) {
  return (
    <div>
      <button className="text-headerTexto font-bold hover:text-white transition-colors duration-200 cursor-pointer">
        {title}
      </button>
    </div>
  );
}
