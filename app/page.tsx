import Image from "next/image";
import InfiniteCarousel from "./components/infiniteCarousel";

import logo_1 from "@/public/logos/american-apparel-logo-vector.svg";
import logo_2 from "@/public/logos/asics-logo-vector-2.svg";
import logo_3 from "@/public/logos/breguet-logo-vector.svg";
import logo_4 from "@/public/logos/burberrys-of-london-logo-vector.svg";
import logo_5 from "@/public/logos/dolce-gabbana-logo-vector.svg";
import logo_6 from "@/public/logos/gucci-logo-vector.svg";
import logo_7 from "@/public/logos/hermes-logo-vector.svg";
import logo_8 from "@/public/logos/louis-vuitton-logo-vector.svg";
import logo_9 from "@/public/logos/new-balance-logo-vector.svg";
import logo_10 from "@/public/logos/omega-logo-vector.svg";

const logos = [
  { src: logo_1, url: "/" },
  { src: logo_2, url: "/" },
  { src: logo_3, url: "/" },
  { src: logo_4, url: "/" },
  { src: logo_5, url: "/" },
  { src: logo_6, url: "/" },
  { src: logo_7, url: "/" },
  { src: logo_8, url: "/" },
  { src: logo_9, url: "/" },
  { src: logo_10, url: "/" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <InfiniteCarousel logos={logos}/>
    </main>
  );
}

/*TEST*/