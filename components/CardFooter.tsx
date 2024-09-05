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
    <div>
      <p className="text-[#B1ACA4] text-[12px] text-center mt-2">
        we care about your data in our{" "}
        <Link
          href="/privacy-policy"
          className="underline transition-all duration-200 hover:text-black/70"
        >
          privacy policy
        </Link>
      </p>
      {/* Social Media */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <Link href={InstagramLink} className="relative w-[22px] h-[22px]">
          <Image src={Instagram} alt="Instagram" fill />
        </Link>
        <Link href={FacebookLink} className="relative w-[22px] h-[22px]">
          <Image src={Facebook} alt="Facebook" fill />
        </Link>
        <Link href={TwitterLink} className="relative w-[22px] h-[22px]">
          <Image src={Twitter} alt="Twitter" fill />
        </Link>
        <Link href={PinterestLink} className="relative w-[22px] h-[22px]">
          <Image src={Pinterest} alt="pinterest" fill />
        </Link>
        <Link href={GithubLink} className="relative w-[22px] h-[22px]">
          <Image src={Github} alt="Github" fill />
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;
