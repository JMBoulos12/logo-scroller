import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const InfiniteCarousel = ({
  logos,
}: {
  logos: { src: StaticImageData; url: string }[]
}) => {
  return (
    <div className="max-w-[800ox]">
      <div className="scroll__inner">
        {logos.map((logo, index) => {
          return(
            <Link key={index} href={logo.url}>
              <Image src={logo.src} alt={`logo ${index + 1}`} height={100} />
            </Link>
          )
        })}
      </div>
    </div>
  )
};

export default InfiniteCarousel;

