import Image from "next/image";
import Link from "next/link";
import Github from "/public/github.svg";
import Pinterest from "/public/pinterest.svg";
import Facebook from "/public/facebook.svg";
import Twitter from "/public/twitter.svg";
import Instagram from "/public/instagram.svg"

const InstagramLink = process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/coderfpv/";
const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || "https://www.x.com/coderfpv";
const GithubLink = process.env.NEXT_PUBLIC_GITHUB || "https://www.github.com/coder-fpv";
const FacebookLink = process.env.NEXT_PUBLIC_FACEBOOK || "https://www.facebook.com/coderfpv";
const PinterestLink = process.env.NEXT_PUBLIC_PINTEREST || "https://pin.it/2UJ2eYC9L";

const CardFooter = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-[#00ffff] text-sm mb-4">
        We value your privacy. Read our{" "}
        <Link
          href="/privacy-policy"
          className="underline transition-all duration-200 hover:text-[#ff00ff]"
        >
          privacy policy
        </Link>
      </p>
      {/* Social Media */}
      <div className="flex justify-center items-center gap-6">
        <Link href={InstagramLink} className="relative w-10 h-10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#00ffff] group">
          <Image src={Instagram} alt="Instagram" fill className="filter invert group-hover:animate-pulse" />
        </Link>
        <Link href={FacebookLink} className="relative w-10 h-10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#00ffff] group">
          <Image src={Facebook} alt="Facebook" fill className="filter invert group-hover:animate-pulse" />
        </Link>
        <Link href={TwitterLink} className="relative w-10 h-10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#00ffff] group">
          <Image src={Twitter} alt="Twitter" fill className="filter invert group-hover:animate-pulse" />
        </Link>
        <Link href={PinterestLink} className="relative w-10 h-10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#00ffff] group">
          <Image src={Pinterest} alt="Pinterest" fill className="filter invert group-hover:animate-pulse" />
        </Link>
        <Link href={GithubLink} className="relative w-10 h-10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#00ffff] group">
          <Image src={Github} alt="Github" fill className="filter invert group-hover:animate-pulse" />
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;
