import Image from "next/image";
import Speaker from "/public/speaker.svg";

const siteLogo = process.env.NEXT_PUBLIC_LOGO || Speaker;

const CardHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <div className="w-20 md:w-28 h-20 md:h-28 relative mx-auto">
        <Image src={siteLogo} alt="speaker" fill className="filter invert" />
      </div>
      <div className="text-center mb-4 lg:mb-6 space-y-4 lg:space-y-6">
        <h1 className="text-4xl md:text-[55px] font-semibold leading-none md:leading-tight text-[#00ffff]">
          {title}
        </h1>
        <p className="text-lg md:text-[26px] font-normal text-[#ff00ff]/80">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CardHeader;
