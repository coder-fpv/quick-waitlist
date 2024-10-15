import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="max-w-screen-lg w-full mx-auto relative border-[1.5px] py-8 border-[#00ffff] bg-[#1a1a2e] rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff33] to-[#00ffff33] opacity-20 rounded-lg"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
